import React from "react";

export const Card = ({ personaje }) => {
  return (
    <div className="col">
      <div className="card mb-3">
        <img width="100%" src={personaje.image} alt="imagen" />

        <h3 className="mb-0 pt-1">{personaje.name}</h3>
        <div className="card-body">
          <p className="card-text">
            Status: {personaje.status} <br />
            Species: {personaje.species} <br />
            Origin: {personaje.origin.name} <br />
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-warning"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-warning"
              >
                Edit
              </button>
            </div>
            <small className="text-body-warning">{personaje.name}</small>
          </div>
        </div>
      </div>
    </div>
  );
};