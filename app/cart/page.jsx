"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {

  const { cart, removeFromCart } = useCart();

  return (
    <main
      style={{
        padding: "30px",
        direction: "rtl",
        fontFamily: "sans-serif"
      }}
    >

      <h1>
        🛒 کارٹ
      </h1>

      <h3>
        Items: {cart.length}
      </h3>


      {cart.length === 0 ? (

        <p>
          کارٹ خالی ہے
        </p>

      ) : (

        cart.map((item, index) => (

          <div
            key={index}
            style={{
              border:"1px solid #ddd",
              padding:"15px",
              margin:"10px 0",
              borderRadius:"10px"
            }}
          >

            <h3>
              {item}
            </h3>


            <button
              onClick={() => removeFromCart(index)}
            >
              ❌ حذف کریں
            </button>


          </div>

        ))

      )}

    </main>
  );
}
