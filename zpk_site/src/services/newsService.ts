import { db } from "../database/firebase";
import { ref, set, get, child, remove } from "firebase/database";
import type { News } from "../types/newsType";

// Додати новину
export const addNews = async (news: News) => {
  await set(ref(db, "news/" + news.id), news);
};

// Отримати всі новини
export const getNewsList = async (): Promise<Record<string, News>> => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "news"));
  return snapshot.exists() ? snapshot.val() : {};
};

// Видалити новину
export const deleteNews = async (id: string) => {
  await remove(ref(db, "news/" + id));
};
