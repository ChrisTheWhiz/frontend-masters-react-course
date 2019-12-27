import React, { FunctionComponent, ReactComponentElement } from "react";
import { Pet } from "./Pet";
import { Animal } from "@frontendmasters/pet";

interface IProps {
  pets: Animal[];
}

const Results: FunctionComponent<IProps> = (props) => {
  const {pets} = props;
  return (
    <div className="search">
      {pets.length === 0 ? <h1>No pets found</h1> :
        pets.map(pet => (
          <Pet animal={pet.type}
               name={pet.name}
               key={pet.id}
               breed={pet.breeds.primary}
               media={pet.photos}
               location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
               id={pet.id} />
        ))
      }
    </div>
  )
};

export default Results;