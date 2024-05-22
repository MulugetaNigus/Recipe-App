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
                      <li>
                        {features.strIngredient1 !== "" &&
                          features.strIngredient1}
                      </li>
                      <li>
                        {features.strIngredient2 !== "" &&
                          features.strIngredient2}
                      </li>
                      <li>
                        {features.strIngredient3 !== "" &&
                          features.strIngredient3}
                      </li>
                      <li>
                        {features.strIngredient4 !== "" &&
                          features.strIngredient4}
                      </li>
                      <li>
                        {features.strIngredient5 !== "" &&
                          features.strIngredient5}
                      </li>
                      <li>
                        {features.strIngredient6 !== "" &&
                          features.strIngredient6}
                      </li>
                      <li>
                        {features.strIngredient7 !== "" &&
                          features.strIngredient7}
                      </li>
                      <li>
                        {features.strIngredient8 !== "" &&
                          features.strIngredient8}
                      </li>
                      <li>
                        {features.strIngredient9 !== "" &&
                          features.strIngredient9}
                      </li>
                      <li>
                        {features.strIngredient10 !== "" &&
                          features.strIngredient10}
                      </li>
                      <li>
                        {features.strIngredient11 !== "" &&
                          features.strIngredient11}
                      </li>
                      <li>
                        {features.strIngredient12 !== "" &&
                          features.strIngredient12}
                      </li>
                      <li>
                        {features.strIngredient13 !== "" &&
                          features.strIngredient13}
                      </li>
                      <li>
                        {features.strIngredient14 !== "" &&
                          features.strIngredient14}
                      </li>
                      <li>
                        {features.strIngredient15 !== "" &&
                          features.strIngredient15}
                      </li>
                      <li>
                        {features.strIngredient16 !== "" &&
                          features.strIngredient16}
                      </li>
                      <li>
                        {features.strIngredient17 !== "" &&
                          features.strIngredient17}
                      </li>
                      <li>
                        {features.strIngredient18 !== "" &&
                          features.strIngredient18}
                      </li>
                      <li>
                        {features.strIngredient19 !== "" &&
                          features.strIngredient19}
                      </li>
                      <li>
                        {features.strIngredient20 !== "" &&
                          features.strIngredient20}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Measurnments</h5>
                    <ul>
                      <li>{features.strMeasure1}</li>
                      <li>{features.strMeasure2}</li>
                      <li>{features.strMeasure3}</li>
                      <li>{features.strMeasure4}</li>
                      <li>{features.strMeasure5}</li>
                      <li>{features.strMeasure6}</li>
                      <li>{features.strMeasure7}</li>
                      <li>{features.strMeasure8}</li>
                      <li>{features.strMeasure9}</li>
                      <li>{features.strMeasure10}</li>
                      <li>{features.strMeasure11}</li>
                      <li>{features.strMeasure12}</li>
                      <li>{features.strMeasure13}</li>
                      <li>{features.strMeasure14}</li>
                      <li>{features.strMeasure15}</li>
                      <li>{features.strMeasure16}</li>
                      <li>{features.strMeasure17}</li>
                      <li>{features.strMeasure18}</li>
                      <li>{features.strMeasure19}</li>
                      {features.strMeasure20?.length && <li>{features.strMeasure20}</li>}
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
