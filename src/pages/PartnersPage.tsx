import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const PartnersPage: React.FC = () => {
  return (
    <div>
      <section className="banner">{/* Баннер */}</section>
      <section className="partner-info">
        {/* Информация для партнеров */}
      </section>
      <RegistrationForm type="partner" />
    </div>
  );
};

export default PartnersPage;
