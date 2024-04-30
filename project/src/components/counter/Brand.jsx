import React, { useState } from "react";

function Brand() {
  let [pot, setPot] = useState({
    type: "Vegetable Pot",
    color: "Red",

    price: 10,
  });

  let incPrice = (value) => {
    setPot((prevstate) => {
      return {
        ...prevstate,
        price: value,
      };
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body bg-light">
                <ul className="list">
                  <li className="list1">Type:{pot.type}</li>
                  <li className="list1">Color:{pot.color}</li>
                  <li className="list1">Price:{pot.price}</li>
                </ul>
                <button
                  onClick={() => {
                    incPrice(1000);
                  }}
                  className="btn btn-primary m-2"
                >
                  Inc Price
                </button>
                <button
                  onClick={() => {
                    incPrice(2000);
                  }}
                  className="btn btn-secondary m-2"
                >
                  Dec Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
