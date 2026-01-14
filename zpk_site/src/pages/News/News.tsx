import { useEffect, useState } from "react";
import { getNewsList, addNews, deleteNews } from "../../services/newsService";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { uploadImagesToCloudinary, deleteImage } from "../../services/uploadService";
import type { News } from "../../types/newsType";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useTheme, useMediaQuery } from "@mui/material";

import "./News.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function NewsPage() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const [activeSteps, setActiveSteps] = useState<{ [key: string]: number }>({}); // для слайдерів

  // модальне вікно
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  // Для редагування новини
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editFiles, setEditFiles] = useState<FileList | null>(null);

  // Для повноекранного перегляду
  const [fullscreenImage, setFullscreenImage] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  // Для свайпів
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    const swipeThreshold = 50; // мінімальна відстань для свайпу

    if (diff > swipeThreshold) {
      handleFullscreenBack();
    } else if (diff < -swipeThreshold) {
      handleFullscreenNext();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsList();
      const list = Object.values(data || {}) as News[];
      setNewsList(list.reverse());
    };
    fetchData();

    onAuthStateChanged(auth, (user) => {
      setIsAdmin(!!user);
    });
  }, []);

  // --- Авторизація ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      showModal("Помилка входу: не правильний логін або пароль");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
      setEmail("");
      setPassword("");
      showModal("Ви вийшли з акаунта!");
    } catch (error) {
      showModal("Помилка при виході.");
    }
  };

  // --- Додавання новини ---
  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let images: string[] = [];

      if (files && files.length > 0) {
        images = await uploadImagesToCloudinary(Array.from(files));
      }

      const newNews: News = {
        id: Date.now().toString(),
        title,
        content,
        image: images,
        date: new Date().toISOString().split("T")[0],
      };

      await addNews(newNews);
      setNewsList([newNews, ...newsList]);
      setTitle("");
      setContent("");
      setFiles(null);
      showModal("Новина успішно додана!");
    } catch (error) {
      console.error("Помилка при додаванні новини:", error);
      showModal("Сталася помилка при додаванні новини.");
    } finally {
      setLoading(false);
    }
  };

  // --- Видалення новини ---
  const handleDeleteNews = async (id: string, images: string[]) => {
    if (!confirm("Видалити цю новину?")) return;

    try {
      for (const url of images) {
        await deleteImage(url);
      }
      await deleteNews(id, images);
      setNewsList(newsList.filter((n) => n.id !== id));
      showModal("Новина успішно видалена!");
    } catch (error) {
      console.error("Помилка при видаленні новини:", error);
      showModal("Сталася помилка при видаленні новини.");
    }
  };

  // --- Редагування новини ---
  const handleEditClick = (news: News) => {
    setEditingNews(news);
    setEditTitle(news.title);
    setEditContent(news.content);
  };

  const handleSaveEdit = async () => {
    if (!editingNews) return;
    setLoading(true);

    try {
      let images = editingNews.image || [];

      if (editFiles && editFiles.length > 0) {
        const uploaded = await uploadImagesToCloudinary(Array.from(editFiles));
        images = [...images, ...uploaded];
      }

      const updatedNews: News = {
        ...editingNews,
        title: editTitle,
        content: editContent,
        image: images,
      };

      await addNews(updatedNews); // або updateNews
      setNewsList(newsList.map(n => n.id === editingNews.id ? updatedNews : n));
      showModal("Новина успішно оновлена!");
      setEditingNews(null);
      setEditFiles(null);
    } catch (error) {
      console.error(error);
      showModal("Помилка при оновленні новини.");
    } finally {
      setLoading(false);
    }
  };

  // --- Слайдер ---
  const handleNext = (id: string, max: number) => {
    setActiveSteps((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % max,
    }));
  };

  const handleBack = (id: string, max: number) => {
    setActiveSteps((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? max - 1 : (prev[id] || 0) - 1,
    }));
  };

  // --- Пагінація ---
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 10;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(newsList.length / newsPerPage);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // --- Fullscreen slider ---
  const handleFullscreenNext = () => {
    if (!fullscreenImage) return;
    setFullscreenImage({
      images: fullscreenImage.images,
      index: (fullscreenImage.index + 1) % fullscreenImage.images.length,
    });
  };

  const handleFullscreenBack = () => {
    if (!fullscreenImage) return;
    setFullscreenImage({
      images: fullscreenImage.images,
      index: fullscreenImage.index === 0 ? fullscreenImage.images.length - 1 : fullscreenImage.index - 1,
    });
  };

  return (
    <div>
      <Header />
      <div className="container news-container">
        <h1 className="page-title">Новини</h1>

        {currentNews.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-title">
              <h2>{item.title}</h2>
            </div>

            <div className="news-content">
              {item.image && item.image.length > 0 && (
                <Box className="news-images" position="relative" width="100%">
                  <img
                    src={item.image[activeSteps[item.id] || 0]}
                    alt=""
                    style={{
                      width: "100%",
                      maxHeight: "500px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                    onClick={() =>
                      setFullscreenImage({ images: item.image!, index: activeSteps[item.id] || 0 })
                    }
                  />
                  {item.image.length > 1 && (
                    <>
                      <Button
                        onClick={() => handleBack(item.id, item.image.length)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "10px",
                          transform: "translateY(-50%)",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          minWidth: "40px",
                          minHeight: "40px",
                          borderRadius: "50%",
                          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                          padding: 0,
                        }}
                      >
                        <KeyboardArrowLeft fontSize="large" />
                      </Button>

                      <Button
                        onClick={() => handleNext(item.id, item.image.length)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          minWidth: "40px",
                          minHeight: "40px",
                          borderRadius: "50%",
                          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                          padding: 0,
                        }}
                      >
                        <KeyboardArrowRight fontSize="large" />
                      </Button>
                    </>
                  )}
                </Box>
              )}

              <div className="news-text">
                <p>{item.content}</p>
                <p className="news-meta">
                  {item.date} | Здолбунівський професійний коледж
                </p>
              </div>
            </div>

            {isAdmin && (
              <div className="admin-buttons">
                <button className="edit-btn" onClick={() => handleEditClick(item)}>Редагувати</button>
                <button className="delete-btn" onClick={() => handleDeleteNews(item.id, item.image || [])}>Видалити</button>
              </div>
            )}
          </div>
        ))}

        {totalPages > 1 && (
          <Stack alignItems="center" sx={{ my: 4, overflowX: "hidden" }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_, value) => setCurrentPage(value)}
              color="primary"
              size={isMobile ? "small" : "medium"}
              siblingCount={isMobile ? 0 : 1}
              boundaryCount={isMobile ? 1 : 2}
              showFirstButton={!isMobile}
              showLastButton={!isMobile}
              sx={{ "& .MuiPagination-ul": { flexWrap: "nowrap" } }}
            />
          </Stack>
        )}

        <hr />

        {!isAdmin ? (
          <form onSubmit={handleLogin} className="auth-form">
            <h3>Увійти, щоб створити новину</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
            <button type="submit">Увійти</button>
          </form>
        ) : (
          <div className="admin-panel">
            <form onSubmit={handleAddNews} className="add-news-form">
              <h3>Додати новину</h3>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Заголовок"
                required
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Текст новини"
                required
              />
              <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
              <button type="submit" disabled={loading}>
                {loading ? "Завантаження..." : "Додати"}
              </button>
              <Button
                className="logout-btn"
                onClick={handleLogout}
                variant="contained"
                style={{ marginTop: "10px" }}
              >
                Вийти
              </Button>
            </form>
          </div>
        )}
      </div>

      {/* Модальне вікно повідомлень */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Повідомлення</DialogTitle>
        <DialogContent>
          <Typography>{modalMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Закрити</Button>
        </DialogActions>
      </Dialog>

      {/* Модальне вікно редагування */}
      <Dialog open={!!editingNews} onClose={() => setEditingNews(null)} fullWidth maxWidth="sm">
        <DialogTitle>Редагувати новину</DialogTitle>
        <DialogContent>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Заголовок"
            required
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="Текст новини"
            required
            style={{ width: "100%", height: "150px" }}
          />
          <input
            type="file"
            multiple
            onChange={(e) => setEditFiles(e.target.files)}
            style={{ marginTop: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingNews(null)}>Скасувати</Button>
          <Button onClick={handleSaveEdit} disabled={loading}>
            {loading ? "Завантаження..." : "Зберегти"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Повноекранний перегляд фото з підтримкою свайпів */}
      <Dialog
        open={!!fullscreenImage}
        onClose={() => setFullscreenImage(null)}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          style: { backgroundColor: "rgba(0,0,0,0.9)", boxShadow: "none" }
        }}
      >
        {fullscreenImage && (
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Button
              onClick={handleFullscreenBack}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                minWidth: "50px",
                minHeight: "50px",
                borderRadius: "50%",
              }}
            >
              <KeyboardArrowLeft fontSize="large" />
            </Button>

            <img
              src={fullscreenImage.images[fullscreenImage.index]}
              alt=""
              style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain" }}
              onClick={() => setFullscreenImage(null)}
            />

            <Button
              onClick={handleFullscreenNext}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                minWidth: "50px",
                minHeight: "50px",
                borderRadius: "50%",
              }}
            >
              <KeyboardArrowRight fontSize="large" />
            </Button>
          </Box>
        )}
      </Dialog>

      <Footer />
    </div>
  );
}
