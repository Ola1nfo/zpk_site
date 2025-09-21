import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../database/firebase";

// Завантаження одного фото
export const uploadImage = async (file: File): Promise<string> => {
  try {
    const safeName = encodeURIComponent(file.name);
    const storageRef = ref(storage, `news/${Date.now()}-${safeName}`);

    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Помилка при завантаженні фото:", error);
    throw error;
  }
};

// Завантаження кількох фото
export const uploadImages = async (files: File[]): Promise<string[]> => {
  try {
    const uploadPromises = files.map((file) => uploadImage(file));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Помилка при завантаженні кількох фото:", error);
    throw error;
  }
};

// Видалення фото по URL
export const deleteImage = async (url: string): Promise<void> => {
  try {
    // Витягуємо шлях з URL (news/...)
    const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/`;
    const path = decodeURIComponent(url.replace(baseUrl, "").split("?")[0]);

    const fileRef = ref(storage, path);
    await deleteObject(fileRef);

    console.log("Фото видалено:", path);
  } catch (error) {
    console.error("Помилка при видаленні фото:", error);
    throw error;
  }
};
