import React, { useState } from "react";
function App() {
  const [temprature, setTemprature] = useState(0);

  const hnadleIncreament = () => {
    setTemprature(temprature + 1);
  };
  const handleDecrement = () => {
    setTemprature(temprature - 1);
  };

  return (
    <>
      <div className="container">
        <div className="card p-2 bg-light" style={{ width: "11rem" }}>
          <h1
            className={`card text-light  ${
              temprature > 0 ? "bg-danger" : "bg-info"
            }`}
            style={{
              height: "150px",
              width: "150px",
              border: "2px solid #666",
            }}
          >
            {temprature} ° C
          </h1>
          <div className="d-flex ">
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={handleDecrement}
            >
              -
            </button>
            <button
              className="btn btn-dark btn-lg m-2"
              onClick={hnadleIncreament}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
