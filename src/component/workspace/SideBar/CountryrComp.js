import React, { useState } from "react";
import "./CountryrComp.css";
import State from "../State/State";

function Workspace() {
  const [countries, setCountries] = useState([
    {
      country: "india",
      child: [
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
      ],
    },
    {
      country: "America",
      child: [
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
        {
          state: "Gujarat",
          population: "50",
          district: ["Amreli"],
        },
      ],
    },
  ]);

  // console.log(countries);

  const handleRemoveCountry = (index) => {
    const updatedCountries = [...countries];
    updatedCountries.splice(index, 1);
    console.log(updatedCountries);
    setCountries(updatedCountries);
  };

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
    <div className="container-fluid">
      <div className="row">
        {countries.length > 0 ? (
          <div className="sidebar col-2 d-flex flex-column align-items-center position-fixed">
            {countries.map((country, index) => (
              <h3
                className="mx-3"
                key={index}
                onClick={() => handleClick(index)}
              >
                {country.country}
                <button onClick={() => handleRemoveCountry(index)}>
                  Remove
                </button>
              </h3>
            ))}

            {!showInputField && (
              <button onClick={() => setShowInputField(true)}>
                Add Country
              </button>
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
        ) : (
          <h2 className="sidebar col-2 d-flex justify-content-center align-items-center position-fixed">
            No Data
          </h2>
        )}
        <div className="col-10" style={{ marginLeft: "317px" }}>
          {selectedParent !== null && selectedParent < countries.length && (
            <State data={countries[selectedParent]} updateChild={updateChild} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Workspace;
