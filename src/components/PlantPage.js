import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);

  function onFormSubmit(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then(setPlants([...plants, newPlant]));
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
