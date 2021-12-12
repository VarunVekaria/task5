import React from "react";
import "./style.css";

function Recipetile({ recipe }) {
  return (
    
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["imageUrl"]}
          alt="tile-image"
        //   onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile__name">{recipe["title"]}</p>
      </div>
    
  );
}

export default Recipetile;
