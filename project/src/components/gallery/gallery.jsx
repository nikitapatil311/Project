import React from "react";
import GalleryCard from "../gallerycard/GalleryCard";

const Gallery = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <Gallery />
          </div>

          <div className="col-sm-3 ">
            <Gallery />
          </div>
          <div className="col-sm-3">
            <Gallery />
          </div>
          <div className="col-sm-3">
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
