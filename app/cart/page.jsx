"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Cart() {

  const { cart, removeFromCart } = useCart();


  return (

    <main
      style={{
        padding:"30px",
        direction:"rtl",
        fontFamily:"sans-serif",
        background:"#f5fff5",
        minHeight:"100vh"
      }}
    >


      <section
        style={{
          background:"#1b5e20",
          color:"white",
          padding:"25px",
          borderRadius:"20px",
          textAlign:"center"
        }}
      >

        <h1>
          🛒 آپ کا کارٹ
        </h1>

        <p>
          کل اشیاء: {cart.length}
        </p>

      </section>



      {cart.length === 0 ? (

        <div
          style={{
            background:"white",
            marginTop:"30px",
            padding:"30px",
            borderRadius:"20px",
            textAlign:"center"
          }}
        >

          <h2>
            کارٹ خالی ہے
          </h2>


          <Link href="/products">

            <button
              style={{
                background:"#1b5e20",
                color:"white",
                padding:"12px 25px",
                border:"none",
                borderRadius:"20px"
              }}
            >
              مصنوعات دیکھیں
            </button>

          </Link>


        </div>


      ) : (


        <div
          style={{
            marginTop:"30px"
          }}
        >


        {cart.map((item,index)=>(


          <div
            key={index}
            style={{
              background:"white",
              padding:"20px",
              marginBottom:"15px",
              borderRadius:"15px",
              boxShadow:"0 4px 10px #ddd",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >


            <h3>
              🌿 {item}
            </h3>


            <button
              onClick={()=>removeFromCart(index)}
              style={{
                background:"#d32f2f",
                color:"white",
                border:"none",
                padding:"10px 15px",
                borderRadius:"15px"
              }}
            >
              ❌ حذف
            </button>


          </div>


        ))}



        <a
          href={`https://wa.me/923477357397?text=میں کارٹ کی مصنوعات کا آرڈر کرنا چاہتا ہوں: ${cart.join(", ")}`}
          target="_blank"
        >

          <button
            style={{
              width:"100%",
              marginTop:"20px",
              background:"#25D366",
              color:"white",
              border:"none",
              padding:"15px",
              borderRadius:"25px",
              fontSize:"18px"
            }}
          >
            🟢 WhatsApp پر آرڈر کریں
          </button>


        </a>


        </div>


      )}


    </main>

  );

}
