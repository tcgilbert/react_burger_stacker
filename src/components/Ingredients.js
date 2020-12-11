

function Ingredients(props) {

  const ingredientButtons = props.ingredients.map((ingredient, index) => {
    return <li key={index}>
      <button value={ingredient.name} onClick={props.addTopping}>{ingredient.name}</button>
    </li>
  })

  return (
    <div>
      <h1>Burger Maker</h1>
      <div className="box">
        <ul>{ingredientButtons}</ul>
      </div>
    </div>
  );
}

export default Ingredients;
