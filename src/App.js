import React, { useState } from "react";
import Ingredients from "./components/Ingredients";
import Burger from "./components/Burger";
import "./App.css";

const ingredientList = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];

function App() {
  const [ingredients, setIngredients] = useState(ingredientList);
  const [futureBurger, setFutureBurger] = useState([]);

  const addTopping = (e) => {
    console.log(futureBurger);
    console.log(e.target.value);
    let arrayCopy = futureBurger;
    arrayCopy.push(e.target.value);
    setFutureBurger(arrayCopy);
  };

  return (
    <div className="App">
      <div>
        <Ingredients
          addTopping={addTopping}
          ingredients={ingredients}
        />
      </div>
      <div>
        <Burger burgerToppings={futureBurger}/>
      </div>
    </div>
  );
}

export default App;
