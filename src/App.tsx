import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage"; // Замените на ваши компоненты страниц
import HousesPage from "./pages/HousesPage";
import PartnersPage from "./pages/PartnersPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Импортируем компонент ProtectedRoute
import Header from "./components/Header"; // Импортируем Header
import Footer from "./components/Footer"; // Импортируем Footer

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Обёртка для Header, main content и Footer */}
        <Header /> {/* Header component */}
        <main className="flex-grow">
          {" "}
          {/* Главное содержимое страницы */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/houses" element={<HousesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
            </Route>
            {/* Добавьте другие маршруты */}
          </Routes>
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </BrowserRouter>
  );
};

export default App;
