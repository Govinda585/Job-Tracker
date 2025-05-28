import React from "react";
import "./Card.css";

type CardProps = {
  title: string;
  price: string;
  subtitle: string;
  icon: string;
};

const Card = ({ title, price, subtitle, icon }: CardProps) => {
  return (
    <div className="card">
      <section className="card-top">
        <div className="card-top-left">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">{price}</p>
        </div>
        <img className="card-img" src={icon} alt={`${title} icon`} />
      </section>
      <section className="card-bottom">
        <p>{subtitle}</p>
      </section>
    </div>
  );
};

export default Card;
