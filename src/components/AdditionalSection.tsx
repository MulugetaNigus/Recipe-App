import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import React from "react";

function AdditionalSection() {
  return (
    <>
    <p className="text-center display-4 fw-bold text-dark" style={{ marginTop: "50px"}}>Why You Here ?</p>
    <div className="mb-5 m-2 p-5" id="additional">
      <br />
      <div className="row d-flex flex-row align-items-center justify-content-evenly">
        <div
          className="col-md-3 fs-4 text-center fw-bold border border-opacity-50 border-light p-5 bg-light rounded shadow"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          To Know Exactly What Is Your Daily Meal
        </div>
        <div
          className="col-md-3 fs-4 fw-bold border border-opacity-50 border-light p-5 bg-light rounded my-2 shadow"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          To Make Easly Your Next Meal By Your Self
        </div>
        <div
          className="col-md-3 fs-4 fw-bold border border-opacity-50 border-light p-5 bg-light rounded shadow"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          To Know Your Favorite Meal Ingradients
        </div>
      </div>
    </div>
    </>
  );
}

export default AdditionalSection;
