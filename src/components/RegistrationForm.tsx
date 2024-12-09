import React from "react";

interface RegistrationFormProps {
  type: "customer" | "partner";
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ type }) => {
  return <form>{/* Поля формы для регистрации */}</form>;
};

export default RegistrationForm;
