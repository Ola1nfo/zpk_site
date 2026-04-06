import { db } from "../database/firebase";
import { ref, set, get, child, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { storage } from "../database/firebase";
import type { News } from "../types/newsType";

// 🔹 Додати новину
export const addNews = async (news: News) => {
  const dbRef = ref(db, "news/" + news.id);
  await set(dbRef, news);
};

// 🔹 Оновити новину
export const updateNews = async (news: News) => {
  const dbRef = ref(db, "news/" + news.id);
  await set(dbRef, news); // повний перезапис
};

// 🔹 Отримати всі новини
export const getNewsList = async () => {
  const snapshot = await get(child(ref(db), "news"));
  return snapshot.exists() ? snapshot.val() : null;
};

// 🔹 Видалити одну картинку зі Storage
export const deleteImageByUrl = async (url: string) => {
  try {
    const path = decodeURIComponent(url.split("/o/")[1].split("?")[0]);
    const imgRef = storageRef(storage, path);
    await deleteObject(imgRef);
  } catch (err) {
    console.error("Помилка видалення фото:", err);
  }
};

// 🔹 Видалити новину + всі її картинки
export const deleteNews = async (id: string, images: string[]) => {
  // 1. Видаляємо новину з БД
  await remove(ref(db, "news/" + id));

  // 2. Видаляємо всі картинки
  if (images && images.length > 0) {
    for (const url of images) {
      await deleteImageByUrl(url);
    }
  }
};