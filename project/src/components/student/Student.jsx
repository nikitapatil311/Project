import { useState } from "react";
import React from "react";

const Student = () => {
  let [mobile, setMobile] = useState({
    brand: "apple",
    price: 20,
  });

  return (
    <>
      <p>{JSON.stringify(mobile)}</p>
    </>
  );
};

export default Student;
