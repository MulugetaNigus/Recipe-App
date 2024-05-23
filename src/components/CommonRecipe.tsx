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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cornish_fairings.jpg/200px-Cornish_fairings.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cornish fairing</h5>
                <p className="card-text">
                  A Cornish fairing is a type of traditional ginger biscuit
                  commonly found in Cornwall, England, United Kingdom.
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Acibadem_Kurabiyesi.jpg/220px-Acibadem_Kurabiyesi.jpg"
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/250px-Pizza-3007395.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Aachener Printen</h5>
                <p className="card-text">
                  Aachener Printen are a type of Lebkuchen originating from the
                  city of Aachen in Germany.
                </p>
                <a href="findRecipe" className="btn btn-light my-4">
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/250px-Espaguetis_carbonara.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Carbonara</h5>
              <p className="card-text">
                Carbonara (Italian: [karboˈnaːra]) is a pasta dish made with
                eggs, hard cheese, fatty cured pork, and black pepper.
              </p>
              <a href="findRecipe" className="btn btn-light my-3">
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
