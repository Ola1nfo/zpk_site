import { useEffect, useState } from "react";
import { getNewsList, addNews, deleteNews } from "../../services/newsService";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { uploadImage, uploadImages, deleteImage } from "../../services/uploadService";
import type { News } from "../../types/newsType";

import "./News.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NewsPage() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsList();
      const list = Object.values(data || {}) as News[];
      setNewsList(list.reverse()); // нові спочатку
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
    } catch (error) {
      alert("Помилка входу: " + (error as Error).message);
    }
  };

  const handleAddNews = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    let images: string[] = [];

    if (files && files.length > 0) {
      // Завантажуємо всі фото через Firebase SDK
      images = await uploadImages(Array.from(files));
    }

    const newNews: News = {
      id: Date.now().toString(),
      title,
      content,
      image: images, // масив URL
      date: new Date().toISOString().split("T")[0],
    };

    // Додаємо новину у Realtime Database
    await addNews(newNews);

    // Оновлюємо локальний state
    setNewsList([newNews, ...newsList]);

    // Очищуємо форму
    setTitle("");
    setContent("");
    setFiles(null);

    alert("Новина успішно додана!");
  } catch (error) {
    console.error("Помилка при додаванні новини:", error);
    alert("Сталася помилка при додаванні новини.");
  }
};


  const handleDeleteNews = async (id: string, images: string[]) => {
    if (confirm("Видалити цю новину?")) {
      await deleteNews(id, images);
      setNewsList(newsList.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <Header />
      <div className="container news-container">
        <h1 className="page-title">Новини</h1>

        {newsList.map((item) => (
          <div key={item.id} className="news-card">
            {/* заголовок */}
            <div className="news-title">
              <h2>{item.title}</h2>
            </div>

            <div className="news-content">
              {/* фото зліва */}
              {item.image && item.image.length > 0 && (
                <div className="news-images">
                  {item.image.map((img, i) => (
                    <img key={i} src={img} alt="" />
                  ))}
                </div>
              )}

              {/* текст справа */}
              <div className="news-text">
                <p className="news-meta">{item.date} | Здолбунівський професійний коледж</p>
                <p>{item.content}</p>
              </div>
            </div>

            {/* кнопка видалення для адміна */}
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
            <h3>Увійти як адмін</h3>
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
            <button type="submit">Додати</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
