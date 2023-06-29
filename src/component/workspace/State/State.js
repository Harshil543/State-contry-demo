import React, { useState } from "react";
import "../State/State.css";

function Child(props) {
  const [state, setState] = useState("");
  const [population, setPopulation] = useState("");
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [districts, setDistricts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!state.trim() || !population.trim()) return;
    const updatedChild = [
      ...props.data.child,
      { state: state, population: population, district: districts },
    ];
    props.updateChild(updatedChild);
    setState("");
    setPopulation("");
    setDistricts([]);
  }

  function handleRemove(index) {
    const updatedChild = [...props.data.child];
    console.log(updatedChild);
    updatedChild.splice(index, 1);
    props.updateChild(updatedChild);
  }

  function handleEdit(index) {
    setEditing(true);
    setEditIndex(index);
    setState(props.data.child[index].state);
    setPopulation(props.data.child[index].population);
    setDistricts(props.data.child[index].district);
  }

  function handleUpdate(event) {
    event.preventDefault();
    if (!state.trim() || !population.trim()) return;
    const updatedChild = [...props.data.child];
    updatedChild[editIndex] = {
      state: state,
      population: population,
      district: districts,
    };
    props.updateChild(updatedChild);
    setState("");
    setPopulation("");
    setDistricts([]);
    setEditing(false);
    setEditIndex(null);
  }

  return (
    <div className="state d-flex flex-column align-items-center">
      <form onSubmit={editing ? handleUpdate : handleSubmit} className="">
        <div>
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Population"
            value={population}
            onChange={(event) => setPopulation(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="District"
            value={districts}
            onChange={(event) => setDistricts([event.target.value])}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-4">
          <button className="" type="submit">
            {editing ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <h1 className="mb-3">{props.data.country}</h1>
      {props.data.child.length > 0 ? (
        <div className="row" style={{ width: "1500px" }}>
          {props.data.child.map((child, index) => (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{child.state || ""}</h5>
                  <p className="card-text">
                    Population : {child.population || ""}
                  </p>
                  <p className="card-text">
                    Districts: {child.district.map((district) => district)}
                  </p>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}

export default Child;
