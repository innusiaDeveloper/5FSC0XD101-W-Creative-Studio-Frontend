import axios from "axios";

const API_URL = "https://your-api-url.com/api"; // Замените на ваш реальный URL

// Функция для получения отзывов
export const fetchReviews = async () => {
  const response = await axios.get(`${API_URL}/reviews`);
  return response.data;
};

// Функция для добавления нового отзыва
export const addReview = async (reviewData: any) => {
  const response = await axios.post(`${API_URL}/reviews`, reviewData);
  return response.data;
};

// Функция для обновления количества "нравится" для отзыва
export const likeReview = async (reviewId: string) => {
  const response = await axios.put(`${API_URL}/reviews/${reviewId}/like`);
  return response.data;
};
