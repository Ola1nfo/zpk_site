import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../database/firebase";

// Завантаження одного фото і повернення URL
export const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `news/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
