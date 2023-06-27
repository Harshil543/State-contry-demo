import React from "react";

export default function Task() {
  return (
    <>
      <ul className="d-flex flex-column">
        <li className="border m-3 d-flex justify-content-between align-items-center">
          <label htmlFor="">
            <input type="checkbox" id="" />
            First item
          </label>
          <div className="mx-3">
            <button className="mx-1">Edit</button>
            <button className="mx-1">remove</button>
          </div>
        </li>
        <li className="border m-3 d-flex justify-content-between align-items-center">
          <label htmlFor="">
            <input type="checkbox" id="" />
            second item
          </label>
          <div className="mx-3">
            <button className="mx-1">Edit</button>
            <button className="mx-1">remove</button>
          </div>
        </li>
      </ul>
    </>
  );
}
