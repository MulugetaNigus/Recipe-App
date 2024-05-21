import recipeapp from "../Assets/banner.jpg";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="row m-1 mt-5" id="Banner">
      <div className="col-md-8 d-flex flex-column align-items-start justify-content-center">
        <span className="h4 ms-1">Recipe Lovers</span>
        <p className="display-1 fw-bold" id="para">
          Here You Can Find About Your{" "}
          <span style={{ color: "rgb(78,65,70)" }}>Daily</span> Recipe Ingradients
        </p>
        <br />
        <Link to="findRecipe">
          <button
            className="btn btn-lg w-100"
            style={{
              backgroundColor: "rgb(78,65,70)",
              color: "white",
            }}
            id="findBtn"
          >
            Find Recipe
          </button>
        </Link>
      </div>
      <div className="col-md-4 mt-2" id="sideBannerImg">
        <img src={recipeapp} alt="recipe-app" className="img-fluid" />
      </div>
    </div>
  );
};

export default Banner;
