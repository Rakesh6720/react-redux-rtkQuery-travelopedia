import React, { useState } from "react";
import {
  useDeleteDestinatonMutation,
  useUpdateDestinatonMutation,
} from "../api/destinationApi";

function Destination({ destination }) {
  const [deleteDestinaton] = useDeleteDestinatonMutation();
  const [updateDestinaton] = useUpdateDestinatonMutation();
  const [updatedCity, setUpdatedCity] = useState(destination.city);
  const [updatedCountry, setUpdatedCountry] = useState(destination.country);
  const [edit, setEdit] = useState(false);

  const onUpdateHandler = () => {
    let city = "",
      country = "";

    if (updatedCity === "") {
      city = destination.city;
    } else {
      city = updatedCity;
    }

    if (updatedCountry === "") {
      country = destination.country;
    } else {
      country = updatedCountry;
    }

    updateDestinaton({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });

    setUpdatedCity("");
    setUpdatedCountry("");
    setEdit(!edit);
  };

  let editButtons;

  if (edit) {
    editButtons = (
      <>
        <button className="btn btn-warning mx-1" onClick={() => setEdit(!edit)}>
          Cancel
        </button>
        <button className="btn btn-primary mx-1" onClick={onUpdateHandler}>
          Update
        </button>
      </>
    );
  } else {
    editButtons = (
      <button className="btn btn-warning" onClick={() => setEdit(!edit)}>
        Edit
      </button>
    );
  }

  let editInputs;

  if (edit) {
    editInputs = (
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-3 p-1 mx-1">
            <input
              value={updatedCity}
              defaultValue={destination.city}
              onChange={(e) => setUpdatedCity(e.target.value)}
            />
          </div>
          <div className="col-3 p-1 mx-1">
            <input
              value={updatedCountry}
              defaultValue={destination.country}
              onChange={(e) => setUpdatedCountry(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      {edit === true ? (
        editInputs
      ) : (
        <div className="col-4 row offset-2">
          <div className="row">
            <div className="col-6 p-1">
              {destination.city}, {destination.country}
            </div>
          </div>
        </div>
      )}

      <div className="col-1 text-warning">{destination.daysNeeded}</div>
      <div className="col-3">
        {editButtons}
        <button
          className="btn btn-danger mx-1"
          onClick={() => deleteDestinaton({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
