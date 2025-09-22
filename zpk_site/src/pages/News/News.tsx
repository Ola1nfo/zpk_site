import { useEffect, useState } from "react";
import { getNewsList, addNews, deleteNews } from "../../services/newsService";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { uploadImagesToCloudinary, deleteImage } from "../../services/uploadService";
import type { News } from "../../types/newsType";

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

  return (
    <div>
      <Header />
      <div className="container news-container">
        <h1 className="page-title">Новини</h1>

        {newsList.map((item) => (
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
                    }}
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
              <button
                className="delete-btn"
                onClick={() => handleDeleteNews(item.id, item.image || [])}
              >
                ❌ Видалити
              </button>
            )}
          </div>
        ))}

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
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Завантаження..." : "Додати"}
              </button>
              <Button className="logout-btn" onClick={handleLogout} variant="contained" style={{ marginTop: "10px" }}>
                Вийти
              </Button>
            </form>
          </div>
        )}
      </div>

      {/* Модальне вікно */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Повідомлення</DialogTitle>
        <DialogContent>
          <Typography>{modalMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Закрити</Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
}
