"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {

  const { addToCart } = useCart();

  const weights = [
    "100 گرام",
    "250 گرام",
    "500 گرام",
    "1 کلو"
  ];


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
    "آملہ پاؤڈر",
    "اشوگندھا پاؤڈر",
    "سہانجنا پاؤڈر"
  ];


  const [selectedWeight, setSelectedWeight] = useState({});


  function addProduct(product){

    const weight =
      selectedWeight[product] || "100 گرام";


    addToCart({

      name: product,

      weight: weight,

      price: "",

      quantity: 1

    });

  }



  return (

    <main
      style={{
        direction:"rtl",
        background:"#f5fff5",
        minHeight:"100vh",
        padding:"30px"
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


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}
      >

      {
        products.map((product,index)=>(

          <div
            key={index}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"20px",
              boxShadow:"0 5px 15px #ddd",
              textAlign:"center"
            }}
          >

            <div
              style={{
                height:"120px",
                background:"#e8f5e9",
                borderRadius:"15px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              🌿 تصویر بعد میں
            </div>


            <h2>
              {product}
            </h2>


            <p>
              وزن منتخب کریں:
            </p>


            <select

              value={
                selectedWeight[product] || "100 گرام"
              }

              onChange={(e)=>

                setSelectedWeight({

                  ...selectedWeight,

                  [product]: e.target.value

                })

              }

              style={{
                padding:"10px",
                borderRadius:"10px",
                width:"100%"
              }}

            >

            {
              weights.map((w,i)=>(

                <option key={i}>
                  {w}
                </option>

              ))
            }

            </select>



            <p>
              قیمت: بعد میں درج ہوگی
            </p>



            <button

              onClick={()=>addProduct(product)}

              style={{
                background:"#1b5e20",
                color:"white",
                border:"none",
                padding:"12px 25px",
                borderRadius:"25px",
                marginTop:"10px"
              }}

            >
              🛒 کارٹ میں شامل کریں
            </button>


          </div>

        ))
      }


      </div>


    </main>

  );

}
