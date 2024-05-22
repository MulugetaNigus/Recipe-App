import React, { useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import { IFeatureFood } from "../Types/Type.app";
import { useSelector } from "react-redux";

const FurtherDetail = () => {
  const [data, setData] = React.useState<IFeatureFood[]>([]);
  const MealID = useSelector((state) => state.value);

  // use useEffect to load the data when the page is loading
  useEffect(() => {
    console.log("THE ID: " + MealID);
    const getRecipe = async () => {
      try {
        await axios
          .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
          .then((result) => {
            setData(result.data.meals);
            console.log(result.data.meals);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, []);

  return (
    <>
      <Nav HeaderTxt="Home" Path="/" />
      {data &&
        data.map((features) => (
          <div className="row m-2">
            <div className="col-md-10 mx-auto">
              <div className="clearfix">
                <img
                  src={features.strMealThumb}
                  className="col-md-6 float-md-end mb-3 ms-md-3"
                  alt="image must be here..."
                />
                <h1>{features.strMeal}</h1>

                <p>
                  <h3>Instructions To Cook !</h3>
                  {features.strInstructions}
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <h5>Ingredients</h5>
                    <ul>
                      {features.strIngredient1?.length ? (
                        <li>{features.strIngredient1}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient2?.length ? (
                        <li>{features.strIngredient2}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient3?.length ? (
                        <li>{features.strIngredient3}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient4?.length ? (
                        <li>{features.strIngredient4}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient5?.length ? (
                        <li>{features.strIngredient5}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient6?.length ? (
                        <li>{features.strIngredient6}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient7?.length ? (
                        <li>{features.strIngredient7}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient8?.length ? (
                        <li>{features.strIngredient8}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient9?.length ? (
                        <li>{features.strIngredient9}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient10?.length ? (
                        <li>{features.strIngredient10}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient11?.length ? (
                        <li>{features.strIngredient11}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient12?.length ? (
                        <li>{features.strIngredient12}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient13?.length ? (
                        <li>{features.strIngredient13}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient14?.length ? (
                        <li>{features.strIngredient14}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient15?.length ? (
                        <li>{features.strIngredient15}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient16?.length ? (
                        <li>{features.strIngredient16}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient17?.length ? (
                        <li>{features.strIngredient17}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient18?.length ? (
                        <li>{features.strIngredient18}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient19?.length ? (
                        <li>{features.strIngredient19}</li>
                      ) : (
                        ""
                      )}
                      {features.strIngredient20?.length ? (
                        <li>{features.strIngredient20}</li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <h5>Measurnments</h5>
                    <ul>
                      {features.strMeasure1?.length ? (
                        <li>{features.strMeasure1}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure2?.length ? (
                        <li>{features.strMeasure2}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure3?.length ? (
                        <li>{features.strMeasure3}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure4?.length ? (
                        <li>{features.strMeasure4}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure5?.length ? (
                        <li>{features.strMeasure5}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure6?.length ? (
                        <li>{features.strMeasure6}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure7?.length ? (
                        <li>{features.strMeasure7}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure8?.length ? (
                        <li>{features.strMeasure8}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure9?.length ? (
                        <li>{features.strMeasure9}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure10?.length ? (
                        <li>{features.strMeasure10}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure11?.length ? (
                        <li>{features.strMeasure11}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure12?.length ? (
                        <li>{features.strMeasure12}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure13?.length ? (
                        <li>{features.strMeasure13}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure14?.length ? (
                        <li>{features.strMeasure14}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure15?.length ? (
                        <li>{features.strMeasure15}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure16?.length ? (
                        <li>{features.strMeasure16}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure17?.length ? (
                        <li>{features.strMeasure17}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure18?.length ? (
                        <li>{features.strMeasure18}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure19?.length ? (
                        <li>{features.strMeasure19}</li>
                      ) : (
                        ""
                      )}
                      {features.strMeasure20?.length ? (
                        <li>{features.strMeasure20}</li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FurtherDetail;
