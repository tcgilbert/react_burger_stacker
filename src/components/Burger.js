

function Burger(props) {

  let burgerSlices = props.burgerToppings.map((topping, index) => {
  return <li key={index}>{topping}</li>
  })

  return (
    <div>
      <h2>Burger</h2>
      <ul>
        {burgerSlices}
      </ul>
    </div>
  );
}

export default Burger;
