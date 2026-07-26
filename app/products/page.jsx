"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function Products() {

  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const products = [
    "ہلدی پاؤڈر",
    "لہسن پاؤڈر",
    "ادرک پاؤڈر",
    "دارچینی پاؤڈر",
    "زیرہ پاؤڈر",
    "سونف پاؤڈر",
    "کلونجی پاؤڈر",
    "اجوائن پاؤڈر",
    "میتھی دانہ پاؤڈر",
    "ملیٹھی پاؤڈر",
    "آملہ پاؤڈر",
    "نیم پاؤڈر",
    "برہمی پاؤڈر",
    "اشوگندھا پاؤڈر",
    "سہانجنا پاؤڈر",
    "سفید موصلی پاؤڈر",
    "گولڈن ملک ہربل مکس"
  ];


  function addProduct(item){

    addToCart(item);

    setMessage(`${item} کارٹ میں شامل ہو گیا`);

    setTimeout(()=>{
      setMessage("");
    },2000);

  }


  return (

    <main
      style={{
        direction:"rtl",
        background:"#f5fff5",
        minHeight:"100vh",
        padding:"25px",
        fontFamily:"Arial"
      }}
    >


      <h1
        style={{
          textAlign:"center",
          color:"#1b5e20"
        }}
      >
        🌿 تمام مصنوعات
      </h1>


      <div style={{textAlign:"center",margin:"20px"}}>

        <Link href="/cart">

          <button
            style={{
              padding:"12px 25px",
              borderRadius:"25px",
              border:"none",
              background:"#1b5e20",
              color:"white"
            }}
          >
            🛒 کارٹ دیکھیں
          </button>

        </Link>

      </div>



      {message &&

        <p
          style={{
            textAlign:"center",
            color:"green",
            fontWeight:"bold"
          }}
        >
          {message}
        </p>

      }



      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}
      >


      {products.map((item,index)=>(


        <div
          key={index}
          style={{
            background:"white",
            borderRadius:"20px",
            padding:"20px",
            textAlign:"center",
            boxShadow:"0 5px 15px #ddd"
          }}
        >


          <div
            style={{
              height:"120px",
              background:"#e8f5e9",
              borderRadius:"15px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"45px"
            }}
          >
            🌿
          </div>



          <h2
            style={{
              color:"#1b5e20"
            }}
          >
            {item}
          </h2>



          <p>
            وزن: 100g / 250g / 500g
          </p>


          <p>
            قیمت: جلد درج ہوگی
          </p>



          <button
            onClick={()=>addProduct(item)}
            style={{
              width:"100%",
              padding:"12px",
              marginTop:"10px",
              borderRadius:"25px",
              border:"none",
              background:"#1b5e20",
              color:"white",
              fontSize:"16px"
            }}
          >
            🛒 کارٹ میں شامل کریں
          </button>



          <a
            href={`https://wa.me/923477357397?text=میں ${item} کا آرڈر کرنا چاہتا ہوں`}
            target="_blank"
          >

            <button
              style={{
                width:"100%",
                padding:"12px",
                marginTop:"10px",
                borderRadius:"25px",
                border:"none",
                background:"#25D366",
                color:"white",
                fontSize:"16px"
              }}
            >
              🟢 WhatsApp آرڈر
            </button>

          </a>


        </div>


      ))}


      </div>


    </main>

  );

}
