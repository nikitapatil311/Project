import React, { useState } from "react";
import GalleryCard from "../gallerycard/GalleryCard";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";
import img4 from "../../assests/images/img4.jpg";

const Gallery = () => {
  let [gal, setGal] = useState([
    { imgUrl: img1, title: "vacation" },
    { imgUrl: img2, title: "Beach Time" },
    { imgUrl: img3, title: "calm time" },
    { imgUrl: img4, title: "Flying" },
  ]);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <GalleryCard image={gal[0].imgUrl} title={gal[0].title} />
          </div>

          <div className="col-sm-3 ">
            <GalleryCard image={gal[1].imgUrl} title={gal[1].title} />
          </div>
          <div className="col-sm-3">
            <GalleryCard image={gal[2].imgUrl} title={gal[2].title} />
          </div>
          <div className="col-sm-3">
            <GalleryCard image={gal[3].imgUrl} title={gal[3].title} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {gal.map((element: { title: string, imgUrl: any }, index: number) => {
            return (
              <div className="col-sm-3" key={index}>
                <GalleryCard image={element.imgUrl} title={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Gallery;
