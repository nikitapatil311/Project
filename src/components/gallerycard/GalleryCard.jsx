import React from "react";
import GalleryImg from "./GalleryImg";
import GalleryTitle from "./GalleryTitle";

const GalleryCard = (props) => {
  return (
    <>
      <div className="card text-bg-light">
        <GalleryImg image={props.image} />
        <GalleryTitle title={props.title} />
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
