"use client";

import { useCart } from "../app/context/CartContext";

export default function ProductCard({product}){

  const { addToCart } = useCart();

  return (

    <div>

      <img
        src={product.image}
        alt={product.name}
        width="200"
      />

      <h2>
        {product.name}
      </h2>

      <p>
        {product.description}
      </p>

      <p>
        Price: {product.price}
      </p>


      <button
        onClick={() => addToCart(product.name)}
        style={{
          padding:"10px",
          borderRadius:"8px"
        }}
      >
        🛒 کارٹ میں شامل کریں
      </button>


    </div>

  );

}
