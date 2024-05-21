import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { IFoods } from "../Types/Type.app";

// icnos
import { PiYoutubeLogoThin } from "react-icons/pi";

const FindRecipe = () => {
  // fetch the recipe info
  const [recipe, setRecipe] = useState<IFoods[]>([]);
  const [Searchrecipe, setSearchRecipe] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipeNotFound, setrecipeNotFound] = useState(false);

  // when i click the search recipe button it fetch the recipe info from the api
  const getRecipe = async () => {
    setLoading(true);
    try {
      if (!Searchrecipe) {
        setLoading(false);
        return setError(true);
      }
      await axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${Searchrecipe}`
        )
        .then((result) => {
          console.log(result.data);
          if (result.data.meals === null) {
            setrecipeNotFound(true);
          }
          setRecipe(result.data.meals);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="row m-1">
        {/* <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md"> */}
        <h2
          className="text-start fw-bold"
          style={{
            color: "rgb(233 ,119 ,48)",
          }}
        >
          Find Your Favorite Recipe Here:
        </h2>
        {/* </div>
        </div> */}
        <div className="content row container d-flex flex-row align-items-center justify-content-center">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-10 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search Recipe"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchRecipe(e.target.value)
              }
              value={Searchrecipe}
            />
            {error && (
              <div className="text-danger bg-danger bg-opacity-25 p-2 mt-1 rounded">
                Recipe Name Required !
              </div>
            )}
          </div>
          <div className="col-md-2 mt-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => getRecipe()}
            >
              Search Recipes
            </button>
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>
      </div>

      {/* another sec */}
      <div className="row mt-5">
        <div className="col-md-12 d-flex flex-row align-items-center justify-content-center">
          {recipe?.length > 0 && (
            <h6 className="text-muted">Your Recipe Results:</h6>
          )}
        </div>
      </div>

      {/* actual recipe informations */}
      <div className="row">
        <div className="col-md-2"></div>
        {/* <div className="col-md my-1"> */}
        {loading && (
          <Button variant="light" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            &nbsp;&nbsp;Loading...
          </Button>
        )}
        {recipe?.map((food) => (
          <div className="row m-2 my-2">
            <div
              className="col-md-4 mx-auto fw-bold rounded"
              style={{ color: "rgb(78,65,70)", width: "23rem" }}
              id="additionalSec"
            >
              <div className="card">
                <img
                  src={food.strMealThumb}
                  className="card-img-top"
                  alt="Recipes Image"
                />
                <div className="card-body">
                  <h3 className="card-title text-muted fw-bold">
                    {food.strMeal}
                  </h3>
                  <p className="card-text small fs-5">
                    {" "}
                    <span className="text-muted"> Area: </span> {food.strArea}
                  </p>
                  <p className="card-text small fs-5">
                    {" "}
                    <span className="text-muted">Categoty: </span>{" "}
                    {food.strCategory}
                  </p>
                  <p className="card-text small fs-5">
                    {" "}
                    <span className="text-muted">Tags: </span>
                    {food.strTags}
                  </p>
                  <br />
                  <div className="actBtn d-flex flex-row align-items-center justify-content-between">
                    <a
                      href={food.strYoutube}
                      target="_black"
                      className="btn btn-light"
                    >
                      Watch Steps{" "}
                      <span className="fs-4">
                        <PiYoutubeLogoThin />
                      </span>
                    </a>
                    <a
                      href={food.strYoutube}
                      target="_black"
                      className="btn btn-dark"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-md-12 text-center">
            {recipeNotFound && <p>Recipe Not Found !</p>}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default FindRecipe;
