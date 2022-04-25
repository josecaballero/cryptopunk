import React from "react";
import ethImg from "./../../assets/weth.png";

import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="Collection card" />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={ethImg} className="ethImage" alt="Eth Image" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
