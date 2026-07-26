"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {

  const { addToCart } = useCart();


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
    "سہانجنا پاؤڈر",
    "ملیٹھی پاؤڈر",
    "نیم پاؤڈر",
    "برہمی پاؤڈر",
    "سفید موصلی پاؤڈر",
    "ستاور پاؤڈر",
    "السی پاؤڈر",
    "تخم ملنگا",
    "اسپغول کا چھلکا"

  ];


  const weights = [

    {
      name:"100 گرام",
      price:"300 روپے"
    },

    {
      name:"250 گرام",
      price:"750 روپے"
    },

    {
      name:"500 گرام",
      price:"1500 روپے"
    },

    {
      name:"1 کلو",
      price:"3000 روپے"
    }

  ];



  const [selected,setSelected] = useState({});



  function addProduct(product){


    const choose =
      selected[product] || weights[0];


    addToCart({

      name: product,

      weight: choose.name,

      price: choose.price,

      quantity:1

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
                alignItems:"center",
                fontSize:"35px"
              }}
            >
              🌿 تصویر بعد میں
            </div>



            <h2>
              {product}
            </h2>



            <select

              style={{
                width:"100%",
                padding:"10px",
                borderRadius:"10px"
              }}


              onChange={(e)=>{


                const selectedWeight =
                  weights.find(
                    w=>w.name===e.target.value
                  );


                setSelected({

                  ...selected,

                  [product]:selectedWeight

                });


              }}


            >


              {
                weights.map((w,index)=>(

                  <option key={index}>
                    {w.name}
                  </option>

                ))
              }


            </select>




            <p>

              قیمت:

              {" "}

              {
                selected[product]
                ?
                selected[product].price
                :
                "300 روپے"
              }

            </p>




            <button

              onClick={()=>addProduct(product)}

              style={{
                background:"#1b5e20",
                color:"white",
                border:"none",
                padding:"12px 25px",
                borderRadius:"25px",
                cursor:"pointer"
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
