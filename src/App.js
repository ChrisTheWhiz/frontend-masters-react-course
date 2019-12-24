// your code  here
import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanaese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Parrot",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "British Shorthair"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
