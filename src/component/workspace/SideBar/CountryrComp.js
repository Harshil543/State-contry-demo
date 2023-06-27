import React, { useState } from "react";
import "./CountryrComp.css";
import State from "../State";

function Workspace() {
  const [countries, setCountries] = useState([]);

  const [newCountry, setNewCountry] = useState("");
  const [showInputField, setShowInputField] = useState(false);

  function addCountry(event) {
    event.preventDefault();
    if (newCountry.trim() === "") return;
    const updatedCountries = [...countries];
    updatedCountries.push({
      country: newCountry,
      child: [],
    });
    setCountries(updatedCountries);
    setNewCountry("");
    setShowInputField(false);
  }

  const [selectedParent, setSelectedParent] = useState(null);

  function handleClick(index) {
    setSelectedParent(index);
  }

  function updateChild(updatedChild) {
    const updatedCountries = [...countries];
    updatedCountries[selectedParent].child = updatedChild;
    setCountries(updatedCountries);
  }

  return (
    <div className="row">
      <div className="sidebar col-2 d-flex flex-column align-items-center">
        {countries.map((country, index) => (
          <h3 className="m-3" key={index} onClick={() => handleClick(index)}>
            {country.country}
          </h3>
        ))}

        {!showInputField && (
          <button onClick={() => setShowInputField(true)}>Add Country</button>
        )}

        {showInputField && (
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={addCountry}
          >
            <input
              className="CountryInput"
              type="text"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
            <button>Add</button>

            <button
              type="button"
              className="m-2"
              onClick={() => setShowInputField(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
      {selectedParent !== null && (
        <State data={countries[selectedParent]} updateChild={updateChild} />
      )}
    </div>
  );
}

export default Workspace;
