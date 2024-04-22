import React from "react";
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
            <div className="card text-bg-light">
              <img src={img1} alt="" />
              <h1 className="title">Vacation</h1>
              <div className="paragraph">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate animi distinctio deleniti reiciendis, sed quos
                excepturi recusandae ipsum dolor voluptate perferendis ullam
                qui. Facere reiciendis alias quae voluptatibus omnis assumenda.
              </div>
            </div>
          </div>

          <div className="col-sm-3 ">
            <div className="card text-bg-light">
              <img src={img2} alt="" height={200} />
              <h1 className="title">Vacation</h1>
              <div className="paragraph">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate animi distinctio deleniti reiciendis, sed quos
                excepturi recusandae ipsum dolor voluptate perferendis ullam
                qui. Facere reiciendis alias quae voluptatibus omnis assumenda.
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-bg-light">
              <img src={img3} alt="" height={200} />
              <h1 className="title">Vacation</h1>
              <div className="paragraph">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate animi distinctio deleniti reiciendis, sed quos
                excepturi recusandae ipsum dolor voluptate perferendis ullam
                qui. Facere reiciendis alias quae voluptatibus omnis assumenda.
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-bg-light">
              <img src={img4} alt="" height={200} />
              <h1 className="title">Vacation</h1>
              <div className="paragraph">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate animi distinctio deleniti reiciendis, sed quos
                excepturi recusandae ipsum dolor voluptate perferendis ullam
                qui. Facere reiciendis alias quae voluptatibus omnis assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
