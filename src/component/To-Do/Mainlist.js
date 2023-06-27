import React from "react";
// import Foter from "./Foter";
import Inputfield from "./Inputfield";
import Child from "./Child";
// import Task from "./Task";

function Mainlist() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col bg-primary mx-2" style={{ height: "500px" }}>
          <Inputfield />
        </div>
        <div className="col bg-primary mx-2">
          <Child />
        </div>
      </div>
    </div>
  );
}

export default Mainlist;
