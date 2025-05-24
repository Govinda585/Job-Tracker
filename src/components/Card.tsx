import React from "react";
import "./Card.css";

type cardProps = {
  title: string;
  price: string;
  subtitle: string;
  icon: string;
};
const Card = ({ title, price, subtitle, icon }: cardProps) => {
  return (
    <div>
      <div className="card">
        <section className="card-top">
          <div className="card-top-left">
            <h3>{title} </h3>
            <p className="card-price">{price}</p>
          </div>
          <img className="card-img" src={icon} />
        </section>
        <section className="card-bottom">
          <p>{subtitle}</p>
        </section>
      </div>
    </div>
  );
};

export default Card;
