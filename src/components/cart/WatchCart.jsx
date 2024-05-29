import React, { useState } from "react";

const WatchCart = () => {
  let [watches, setWatches] = useState([
    { id: "AA01", imageUrl: "", name: "Rolex", price: "1800", qty: 2 },

    { id: "AA02", imageUrl: "", name: "Titan", price: "1800", qty: 2 },

    { id: "AA03", imageUrl: "", name: "Fossil", price: "1800", qty: 2 },
  ]);

  let incQty = (watchId) => {
    setWatches((prevState) => {
      return prevState.map((watch, index) => {
        if (watch.id === watchId) {
          return {
            ...watch,
            qty: watch.qty + 1,
          };
        } else {
          return watch;
        }
      });
    });
  };

  let decQty = (watchId) => {
    setWatches((prevState) => {
      return prevState.map((watch, index) => {
        if (watch.id === watchId) {
          return {
            ...watch,
            qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1,
          };
        } else {
          return watch;
        }
      });
    });
  };

  let deleteWatches = (watchId) => {
    setWatches((prevState) => {
      return prevState.filter((watch) => watch.id !== watchId);
    });
  };

  let grandTotal = () => {
    let total = 0;
    for (let watch of watches) {
      total += Number(watch.qty) * Number(watch.total);
    }
    return total;
  };
  return (
    <>
      <pre>{JSON.stringify(watches)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="column">
            <p className="h3">Watch Cart</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              deserunt doloremque eius et. Ipsam cumque ex rem, molestias quas
              corporis facere, nulla voluptatum eligendi odio minus sed dolores,
              deleniti illo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Image</th>
                  <th>Price </th>
                  <th>Qty</th>
                  <th>total</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {watches.map((watch, index) => {
                  return (
                    <tr key={index}>
                      <td>{watch.id}</td>
                      <td>
                        <img
                          src={watch.imageUrl}
                          alt="watch"
                          height={50}
                          width={40}
                        />
                      </td>
                      <td>{watch.name}</td>
                      <td>{watch.price}</td>
                      <td>
                        <i
                          onClick={() => decQty(watch.id)}
                          class="bi bi-dash-circle-fill text-success"
                        ></i>
                        {watch.qty}
                        <i
                          onClick={() => incQty(watch.id)}
                          class="bi bi-plus-circle-fill text-success"
                        ></i>
                      </td>
                      <td>{watch.qty * watch.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteWatches(watch.id)}
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4}></td>
                  <td>Grand Total</td>
                  <td>{grandTotal()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchCart;
