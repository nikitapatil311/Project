import React from "react";
import "./Card.css";

const MyCard = () => {
  return (
    <>
      <h2 className="myStyles">This is my card</h2>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <i class="bi bi-apple text-warning"></i>
    </>
  );
};

export default MyCard;
