import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("Authorization="))
        ?.split("=")[1];
      setIsAuthenticated(!!authCookie);
      if (!authCookie) navigate("/login", { replace: true });
    };
    checkAuth();
  }, [navigate]);

  return isAuthenticated;
};
