import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, description, to, leadTo }) => {
  return (
    <div className="the_card_c">
      <div className="card_container">
        <div className="image_container">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card_content">
          <div className="card_title">
            <h3>{title}</h3>
          </div>
          <div className="card_body">
            <p>{description}</p>
          </div>
        </div>
        <div className="btn_card">
          <button><Link to={leadTo}>{to}</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
