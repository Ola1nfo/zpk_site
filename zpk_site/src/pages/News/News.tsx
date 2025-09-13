import { useEffect, useState } from "react";
import { getNewsList, addNews } from "../../services/newsService";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { uploadImage } from "../../services/uploadService"; // ✅ новий сервіс
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
  const [files, setFiles] = useState<FileList | null>(null); // ✅ кілька фото

  const auth = getAuth();

  // завантажуємо новини з бази
  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsList();
      const list = Object.values(data || {}) as News[];
      setNewsList(list);
    };
    fetchData();

    // стежимо за авторизацією
    onAuthStateChanged(auth, (user) => {
      setIsAdmin(!!user);
    });
  }, []);

  // логін адміна
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Помилка входу: " + (error as Error).message);
    }
  };

  // додавання новини
  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();

    let images: string[] = [];
    if (files) {
      for (const file of Array.from(files)) {
        const url = await uploadImage(file); // ✅ заливаємо у Firebase Storage
        images.push(url);
      }
    }

    const newNews: News = {
      id: Date.now().toString(),
      title,
      content,
      image: images, // ✅ масив посилань
      date: new Date().toISOString().split("T")[0],
    };

    await addNews(newNews);
    setNewsList([...newsList, newNews]);

    // очистка форми
    setTitle("");
    setContent("");
    setFiles(null);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Новини</h1>

        {/* список новин */}
        {newsList.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>

            {/* кілька фото */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {item.image?.filter(Boolean).map((img, i) => (
                    <img key={i} src={img} alt="" width="200" />
                ))}

            </div>

            <p>
              <small>{item.date}</small>
            </p>
          </div>
        ))}

        <hr />

        {/* якщо не адмін – форма логіну */}
        {!isAdmin ? (
          <form onSubmit={handleLogin}>
            <h3>Увійти як адмін</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
            <br />
            <button type="submit">Увійти</button>
          </form>
        ) : (
          // якщо адмін – форма додавання новини
          <form onSubmit={handleAddNews}>
            <h3>Додати новину</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок"
              required
            />
            <br />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Текст новини"
              required
            />
            <br />
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
            <br />
            <button type="submit">Додати</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
