import React, { useState } from "react";

const Child = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    setValue(event.preventDefault());
    if (value) {
      setItem([...item, value]);
      setValue("");
    }
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleRemove = (index) => {
    // console.log("remove");
    const newTodos = [...item];
    newTodos.splice(index, 1);
    setItem(newTodos);
  };
  return (
    <div className="text-light ">
      <h1 className="mt-4">Tasks</h1>
      <ul className="d-flex flex-column">
        {item.map((todo, index) => (
          <li
            key={index}
            className="m-3 d-flex justify-content-between align-items-center"
          >
            <span className="m-3">{todo}</span>
            <div className="mx-3">
              {/* <button className="mx-1">Edit</button> */}
              <button
                className="mx-1"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todos"
            id="todos"
            placeholder=""
            value={value}
            onChange={handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
      </ul>
    </div>
  );
};

export default Child;
