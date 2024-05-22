import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import React from "react";

function CommonRecipe() {
  return (
    <>
      <div className="mb-5 m-2">
        <p
          className="text-center display-4 fw-bold"
          style={{ marginTop: "150px" }}
        >
          Popular Recipes
        </p>
        <br />
        <div className="row m-2 d-flex flex-row align-items-center justify-content-center gap-4">
          <div
            className="col-md-3 fs-6 fw-bold p-0 rounded"
            style={{ color: "rgb(78,65,70)" }}
            id="additionalSec"
          >
            <div className="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Carrot_cake_at_America_Graffiti_%28cropped%29.jpg/220px-Carrot_cake_at_America_Graffiti_%28cropped%29.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Carrot cake</h5>
                <p className="card-text">
                  Carrot cake (also known as passion cake) is cake that contains
                  carrots mixed into the batter.
                </p>
                <a href="findRecipe" className="btn btn-light">
                  Search Another
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 fs-6 fw-bold p-0 rounded"
            style={{ color: "rgb(78,65,70)" }}
            id="additionalSec"
          >
            <div className="card">
              <img
                src="https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Chicken nugget</h5>
                <p className="card-text">
                  A chicken nugget is a food product consisting of a small piece
                  of deboned chicken meat that is breaded or battered, then
                  deep-fried or baked.
                </p>
                <a href="findRecipe" className="btn btn-light">
                  Search Another
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 fs-6 fw-bold p-0 rounded"
            style={{ color: "rgb(78,65,70)" }}
            id="additionalSec"
          >
            <div className="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blueberry_pancakes_%283%29.jpg/220px-Blueberry_pancakes_%283%29.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Pancake</h5>
                <p className="card-text">
                  A pancake (or hotcake, griddlecake, or flapjack) is a flat
                  cake, often thin and round, prepared from a starch-based
                  batter that may contain eggs, milk and butter
                </p>
                <a href="findRecipe" className="btn btn-light">
                  Search Another
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2 mb-5 d-flex flex-row align-items-center justify-content-center gap-4">
        <div
          className="col-md-3 fs-6 fw-bold rounded"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg/250px-Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Lomo saltado</h5>
              <p className="card-text">
                Lomo saltado is a popular, traditional Peruvian dish, a stir fry
                that typically combines marinated strips of sirloin (or other
                beef steak) with onions, tomatoes...
              </p>
              <a href="findRecipe" className="btn btn-light">
                Search Another
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 fs-6 fw-bold p-0 rounded"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          <div className="card">
            <img
              src="https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Doughnut</h5>
              <p className="card-text">
              A doughnut or donut (/ˈdoʊnət/) is a type of pastry made from leavened fried dough.F
              </p>
              <a href="findRecipe" className="btn btn-light mb-3">
                Search Another
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 fs-6 fw-bold p-0 rounded"
          style={{ color: "rgb(78,65,70)" }}
          id="additionalSec"
        >
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arepa_de_pabellon.jpg/220px-Arepa_de_pabellon.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Arepa (Spanish pronunciation: [aˈɾepa]) is a type of flatbread
                made of ground maize dough stuffed with a filling, eaten in
                northern parts of South America
              </p>
              <a href="findRecipe" className="btn btn-light">
                Search Another
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonRecipe;
