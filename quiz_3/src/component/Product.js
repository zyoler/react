import React from "react";

function Product(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <button onClick={() => alert(`Produk ini bernama ${props.name}`)}>Detail</button>
    </div>
  );
}

export default Product;
