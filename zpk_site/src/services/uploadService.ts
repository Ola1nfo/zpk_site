// uploadService.ts
export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ZPK-site"); // твій preset

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/djpsbfdgl/image/upload", // <- встав свій Cloud name
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error("Помилка Cloudinary: " + errText);
  }

  const data = await res.json();
  return data.secure_url;
};

// Масове завантаження
export const uploadImagesToCloudinary = async (files: File[]): Promise<string[]> => {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    try {
      const url = await uploadImageToCloudinary(file);
      uploadedUrls.push(url);
    } catch (err) {
      console.error("Помилка завантаження файлу:", file.name, err);
    }
  }

  return uploadedUrls;
};

// Видалення з Cloudinary (якщо потрібно)
export const deleteImage = async (url: string) => {
  console.log("Видалити з Cloudinary:", url);
  // Для справжнього видалення потрібен сервер з API Key
};
