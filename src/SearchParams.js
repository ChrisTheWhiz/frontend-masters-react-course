import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdowns";
import Results from './Results';
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const {animals} = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal)
      .then(({breeds: apiBreeds}) => {
        const breedString = apiBreeds.map(({name}) => name);
        setBreeds(breedString);
      }, console.error)

  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          <select id="theme"
                  value={theme}
                  onChange={ e => setTheme(e.target.value)}
                  onBlur={ e => setTheme(e.target.value)}>
            <option value="peru">peru</option>
            <option value="darkblue">darkblue</option>
            <option value="mediumorchid">mediumorchid</option>
            <option value="chartreuse">chartreuse</option>
          </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
