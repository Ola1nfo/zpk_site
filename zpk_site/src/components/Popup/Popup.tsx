import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Popup.module.css";

const DELAY_MS = 3_000;

export default function Popup() {
  const [visible, setVisible] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  const { pathname } = useLocation();

  const close = useCallback(() => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      setAnimateOut(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return; // ← показувати тільки на головній
    const show = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(show);
  }, [pathname]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${animateOut ? styles.out : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <button className={styles.closeBtn} onClick={close} aria-label="Закрити">
          ×
        </button>

        <div className={styles.logoWrap}>
          <img src="/logo.png" alt="Логотип" className={styles.logo} />
        </div>

        <h2 className={styles.title} id="popup-title">
          ЗАПРОШУЄМО
        </h2>
        <h2 className={styles.title}>
          НА НАВЧАННЯ
        </h2>

        <Link to="/ogoloshennya-dlya-abituriientiv" className={styles.btn} onClick={close}>
          ДЕТАЛЬНІШЕ
        </Link>
      </div>
    </div>
  );
}