import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

const Nav = ({ HeaderTxt , Path}) => {
  return (
    <div>
      {/* <nav className="navbar navbar-none bg-none p-3">
        <div className="container-fluid">
          <p className="h1 text-dark">Recipe Lover</p>
        </div>
        <div className="right">
          find Recipes
        </div>
      </nav> */}
      <nav className="navbar navbar-none bg-none p-1">
        <div className="container-fluid">
          <p className="display-6 text-dark">
            Recipe{" "}
            <span className="fw-bold" style={{ color: "rgb(233 ,119 ,48)" }}>
              Lover
            </span>
          </p>
          <form className="d-flex">
            <Link to={Path}>
              <button className="btn btn-outline-warning">{HeaderTxt}</button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
