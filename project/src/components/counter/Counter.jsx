import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  //     callback function - passing a function as an argument
  //    to another function and executed when it is called is calllback function.
  let incrementCounter = () => {
    setCounter((prevstate) => {
      return prevstate + 1;
    });
  };

  let decrementCounter = () => {
    setCounter((prevstate) => {
      return prevstate - 1;
    });
  };

  return (
    <>
      {/* creating a card */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4 ">
            <div className="card bg-light">
              <div className="card-body">
                <p className=" display-3">{counter}</p>

                <button
                  onClick={incrementCounter}
                  className="btn btn-success m-2"
                >
                  Increment
                </button>
                <button
                  onClick={decrementCounter}
                  className="btn btn-warning m-2"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
