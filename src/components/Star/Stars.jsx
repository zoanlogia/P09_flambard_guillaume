import "./Stars.scss";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Stars = () => {
  const { id } = useParams();
  const starRating = data.find((elem) => elem.id === id) 

  const totalStars = 5;
  const activeStars = parseInt(starRating.rating);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((arr,index) => {
        const starClass = index < activeStars ? "active" : "";
        return (
          <div key={index}>
            <span className={`star ${starClass}`}>&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
