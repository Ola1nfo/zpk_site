import { useState, useEffect, useCallback } from "react";
import styles from "./Popup.module.css";

const DELAY_MS = 6_000;

export default function Popup() {
  const [visible, setVisible] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  const close = useCallback(() => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      setAnimateOut(false);
    }, 250);
  }, []);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(show);
  }, []);

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
        {/* Кнопка закрити */}
        <button className={styles.closeBtn} onClick={close} aria-label="Закрити">
          ×
        </button>

        {/* Логотип */}
        <div className={styles.logoWrap}>
          <img src="/logo.png" alt="Логотип" className={styles.logo} />
        </div>

        {/* Текст */}
        <h2 className={styles.title} id="popup-title">
          ЗАПРОШУЄМО
        </h2>
        <h2 className={styles.title}>
          НА НАВЧАННЯ
        </h2>

        {/* Кнопка */}
        <a href="/ogoloshennya-dlya-abituriientiv" className={styles.btn}>
          ДЕТАЛЬНІШЕ
        </a>
      </div>
    </div>
  );
}
