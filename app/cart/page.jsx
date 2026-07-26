"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {

  const { cart, removeFromCart } = useCart();


  return (

    <main
      style={{
        direction:"rtl",
        minHeight:"100vh",
        background:"#f5fff5",
        padding:"30px",
        fontFamily:"Arial"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          color:"#1b5e20"
        }}
      >
        🛒 آپ کا کارٹ
      </h1>


      {
        cart.length === 0 ?

        <p
          style={{
            textAlign:"center",
            fontSize:"20px"
          }}
        >
          کارٹ خالی ہے
        </p>


        :


        cart.map((item,index)=>(


          <div
            key={index}
            style={{
              background:"white",
              padding:"20px",
              margin:"20px 0",
              borderRadius:"20px",
              boxShadow:"0 5px 15px #ddd"
            }}
          >

            <h2 style={{color:"#1b5e20"}}>
              🌿 {item.name}
            </h2>


            <p>
              وزن: {item.weight || "منتخب نہیں"}
            </p>


            <p>
              قیمت: {item.price || "قیمت درج نہیں"}
            </p>


            <p>
              مقدار: {item.quantity || 1}
            </p>


            <button
              onClick={() => removeFromCart(index)}
              style={{
                background:"#d32f2f",
                color:"white",
                border:"none",
                padding:"10px 25px",
                borderRadius:"20px"
              }}
            >
              ❌ ختم کریں
            </button>


          </div>


        ))

      }


    </main>

  );

}
