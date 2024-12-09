interface Credentials {
  username?: string;
  email?: string;
  password?: string;
}

interface UserData {
  id: number;
  username: string;
  // ... другие данные пользователя
}

const apiUrl = "/api"; // Замените на ваш API URL

export const login = async (credentials: Credentials): Promise<UserData> => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json(); // Попытка получить данные об ошибке от сервера
    const errorMessage =
      errorData.message || `Ошибка входа: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

export const register = async (credentials: Credentials): Promise<UserData> => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage =
      errorData.message || `Ошибка регистрации: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${apiUrl}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    console.error("Ошибка выхода:", response.status);
    throw new Error(`Ошибка выхода: ${response.status}`);
  }
  document.cookie =
    "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
