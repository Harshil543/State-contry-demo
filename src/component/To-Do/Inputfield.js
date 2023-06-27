import React, { useState } from "react";

export default function Inputfield() {
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
      <h1 className="mt-4">List</h1>
      <ul className="d-flex flex-column">
        {item.map((todo, index) => (
          <li
            key={index}
            className="m-3 d-flex justify-content-between align-items-center"
          >
            <div className="mx-3">
              <button
                className="mx-1"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                x
              </button>
              <span className="m-3">{todo}</span>
            </div>
          </li>
        ))}
        <form onSubmit={handleSubmit}>
          <button type="submit">+</button>
          <input
            type="text"
            name="todos"
            id="todos"
            placeholder=""
            value={value}
            onChange={handleOnChange}
          />
        </form>
      </ul>
    </div>
  );
}
