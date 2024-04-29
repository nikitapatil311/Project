import React from "react";
import { useState } from "react";

const Student = () => {
  // learning usestate

  let [car, setCar] = useState({
    brand: "Benz",
    color: "white",
    price: 2000000000,
  });
  return (
    <>
      <h1>{JSON.stringify(car)}</h1>
    </>
  );
};

export default Student;
