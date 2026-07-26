"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Products() {

  const { addToCart, cart } = useCart();
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
    "ستاور پاؤڈر",
    "السی پاؤڈر",
    "تخم ملنگا",
    "اسپغول کا چھلکا",
    "شہد خالص",
    "زیتون کا تیل",
    "کلونجی کا تیل",
    "بادام روغن",
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
        padding:"20px",
        direction:"rtl",
        background:"#f5fff5",
        minHeight:"100vh",
        fontFamily:"sans-serif"
      }}
    >

      <section
        style={{
          background:"#1b5e20",
          color:"white",
          padding:"35px",
          borderRadius:"20px",
          textAlign:"center",
          marginBottom:"25px"
        }}
      >

        <h1>
          🌿 گھر کا دَواخانہ
        </h1>

        <p>
          خالص جڑی بوٹیاں اور قدرتی ہربل مصنوعات
        </p>


        <Link href="/cart">

          <button
            style={{
              padding:"12px 25px",
              borderRadius:"25px",
              border:"none",
              cursor:"pointer"
            }}
          >
            🛒 کارٹ ({cart.length})
          </button>

        </Link>

      </section>



      {message &&

      <div
        style={{
          background:"#d8ffd8",
          color:"green",
          padding:"12px",
          borderRadius:"10px",
          textAlign:"center",
          marginBottom:"20px"
        }}
      >
        {message}
      </div>

      }



      <h2
        style={{
          textAlign:"center",
          color:"#1b5e20"
        }}
      >
        ہماری مصنوعات
      </h2>



      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
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
            boxShadow:"0 4px 12px #ddd",
            textAlign:"center"
          }}
        >


          <div
            style={{
              height:"150px",
              background:"#e8f5e9",
              borderRadius:"15px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"50px"
            }}
          >
            🌿
          </div>


          <h3
            style={{
              color:"#2e7d32"
            }}
          >
            {item}
          </h3>


          <p>
            وزن: 100g / 250g / 500g
          </p>


          <p>
            قیمت: جلد درج ہوگی
          </p>



          <a
            href={`https://wa.me/923477357397?text=میں ${item} کا آرڈر کرنا چاہتا ہوں`}
            target="_blank"
          >

          <button
            style={{
              background:"#25D366",
              color:"white",
              border:"none",
              padding:"10px",
              borderRadius:"20px",
              margin:"5px",
              cursor:"pointer"
            }}
          >
            WhatsApp آرڈر
          </button>

          </a>



          <button
            onClick={()=>addProduct(item)}
            style={{
              background:"#1b5e20",
              color:"white",
              border:"none",
              padding:"10px",
              borderRadius:"20px",
              margin:"5px",
              cursor:"pointer"
            }}
          >
            🛒 کارٹ میں شامل کریں
          </button>


        </div>


      ))}


      </div>


    </main>

  );

}
