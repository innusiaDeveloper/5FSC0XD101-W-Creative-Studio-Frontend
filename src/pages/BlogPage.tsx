import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

const BlogPage: React.FC = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Здесь должен быть ваш код для получения данных из API
  }, []);

  return (
    <div>
      <h1>Отзывы</h1>
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default BlogPage;
