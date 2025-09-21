import { db } from "../database/firebase";
import { ref, set, get, child, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { storage } from "../database/firebase";
import type { News } from "../types/newsType";

// Додати новину
export const addNews = async (news: News) => {
  const dbRef = ref(db, "news/" + news.id);
  await set(dbRef, news);
};

// Отримати всі новини
export const getNewsList = async () => {
  const snapshot = await get(child(ref(db), "news"));
  return snapshot.exists() ? snapshot.val() : null;
};

// Видалити новину + фото з Firebase
export const deleteNews = async (id: string, images: string[]) => {
  // 1. Видаляємо записи з Realtime Database
  await remove(ref(db, "news/" + id));

  // 2. Видаляємо фото з Firebase Storage
  for (const url of images) {
    try {
      const imgRef = storageRef(storage, decodeURIComponent(url.split("/o/")[1].split("?")[0]));
      await deleteObject(imgRef);
    } catch (err) {
      console.error("Помилка видалення фото:", err);
    }
  }
};
