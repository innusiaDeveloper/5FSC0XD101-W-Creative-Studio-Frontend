import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero-banner">{/* Герой-баннер */}</section>
      <section className="company-info">{/* Информация о компании */}</section>
      <RegistrationForm type="customer" />
    </div>
  );
};

export default HomePage;
