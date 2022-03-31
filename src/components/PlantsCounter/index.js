import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

const PlantsCounter = () => {
  const [numberOfPlants, setNumberOfPlants] = useState(0);

  useEffect(() => {
    axios
      .get("https://omyplant.herokuapp.com/plantdbCount")
      .then((res) => {
        setNumberOfPlants(res.data[0].count);
      })
      .catch((err) => {
        console.log("erreur: ", err.response.data);
      });
  }, []);

  return (
    <section className="section-plant-counter">
      <div className="plant-counter">
        <p>
          {numberOfPlants > 1
            ? `Grâce à vous, déjà ${numberOfPlants} plantes recensées !`
            : `Grâce à vous, déjà ${numberOfPlants} plante recensée !`}
        </p>
      </div>
    </section>
  );
};

export default PlantsCounter;
