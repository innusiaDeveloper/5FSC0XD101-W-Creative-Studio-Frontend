import axios from "axios";

const API_URL = "https://your-api-url.com/api"; // Замените на ваш реальный URL

// Функция для получения данных о домах
export const fetchHouses = async () => {
  const response = await axios.get(`${API_URL}/houses`);
  return response.data;
};

// Функция для бронирования дома
export const bookHouse = async (houseId: string, bookingData: any) => {
  const response = await axios.post(
    `${API_URL}/houses/${houseId}/book`,
    bookingData
  );
  return response.data;
};
