import React from "react";
import GalleryCard from "../gallerycard/GalleryCard";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";
import img4 from "../../assests/images/img4.jpg";

const Gallery = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <GalleryCard image={img1} title="Vacation" />
          </div>

          <div className="col-sm-3 ">
            <GalleryCard image={img2} title="beach time" />{" "}
          </div>
          <div className="col-sm-3">
            <GalleryCard image={img3} title={"CalmTime"} />{" "}
          </div>
          <div className="col-sm-3">
            <GalleryCard image={img4} title="Flying " />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
