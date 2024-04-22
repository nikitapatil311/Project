import React from "react";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";
import img4 from "../../assests/images/img4.jpg";

const GalleryCard = () => {
  return (
    <>
      <div className="card text-bg-light">
        <img src={img1} alt="" />
        <h1 className="title">Vacation</h1>
        <div className="paragraph">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          animi distinctio deleniti reiciendis, sed quos excepturi recusandae
          ipsum dolor voluptate perferendis ullam qui. Facere reiciendis alias
          quae voluptatibus omnis assumenda.
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
