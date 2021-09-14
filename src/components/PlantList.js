import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {
  const plantCards = plants
    .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
    .map((plant) => {
      console.log(plant);
      return <PlantCard plant={plant} key={plant.name} />;
    });

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
