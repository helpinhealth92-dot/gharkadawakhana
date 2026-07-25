"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {

  const { cart } = useCart();

  return (
    <div>
      <h1>کارٹ</h1>
      <p>Items: {cart.length}</p>
    </div>
  );
}
