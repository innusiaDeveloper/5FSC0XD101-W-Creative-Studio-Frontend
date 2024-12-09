import React, { useEffect, useState } from "react";
import HouseCard from "../components/HouseCard";

const HousesPage: React.FC = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Здесь должен быть ваш код для получения данных из API
  }, []);

  return (
    <div>
      <h1>Наши Дома</h1>
      <div className="houses-grid">
        {houses.map((house) => (
          <HouseCard key={house.id} {...house} />
        ))}
      </div>
    </div>
  );
};

export default HousesPage;
