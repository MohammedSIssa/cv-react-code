import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    name: "Playstation 5",
    qty: 1,
    price: 900,
  });
  const MAX_QTY = 10;

  function handleQtyIncrease() {
    setProduct({ ...product, qty: product.qty + 1 });
  }

  function handleQtyDecrease() {
    if (!product.qty) {
      return;
    }
    setProduct({ ...product, qty: product.qty - 1 });
  }

  return (
    <>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <h3>Total Cost: {product.price * product.qty}</h3>
      <div className="controls">
        <button onClick={handleQtyIncrease} disabled={product.qty === MAX_QTY}>
          Add
        </button>
        <h4>{product.qty}</h4>
        <button onClick={handleQtyDecrease} disabled={!product.qty}>
          Remove
        </button>
      </div>
    </>
  );
}
export default App;
