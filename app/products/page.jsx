"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Products() {

  const { addToCart } = useCart();


  const products = [

    {name:"ہلدی پاؤڈر", english:"Turmeric Powder"},
    {name:"لہسن پاؤڈر", english:"Garlic Powder"},
    {name:"ادرک پاؤڈر", english:"Ginger Powder"},
    {name:"دارچینی پاؤڈر", english:"Cinnamon Powder"},
    {name:"زیرہ پاؤڈر", english:"Cumin Powder"},
    {name:"سونف پاؤڈر", english:"Fennel Powder"},
    {name:"کلونجی پاؤڈر", english:"Black Seed Powder"},
    {name:"اجوائن پاؤڈر", english:"Carom Seed Powder"},
    {name:"میتھی دانہ پاؤڈر", english:"Fenugreek Powder"},
    {name:"آملہ پاؤڈر", english:"Amla Powder"},
    {name:"اشوگندھا پاؤڈر", english:"Ashwagandha Powder"},
    {name:"سہانجنا پاؤڈر", english:"Moringa Powder"},
    {name:"ملیٹھی پاؤڈر", english:"Licorice Powder"},
    {name:"نیم پاؤڈر", english:"Neem Powder"},
    {name:"برہمی پاؤڈر", english:"Brahmi Powder"},
    {name:"سفید موصلی پاؤڈر", english:"Safed Musli Powder"},
    {name:"ستاور پاؤڈر", english:"Shatavari Powder"},
    {name:"السی پاؤڈر", english:"Flaxseed Powder"},
    {name:"تخم ملنگا", english:"Basil Seeds"},
    {name:"اسپغول کا چھلکا", english:"Psyllium Husk"}

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
      selected[product.name] || weights[0];


    addToCart({

      name: product.name,

      englishName: product.english,

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
        🌿 تمام مصنوعات / All Products
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




            <h2
              style={{
                marginBottom:"5px"
              }}
            >
              {product.name}
            </h2>


            <p
              style={{
                color:"#555",
                fontSize:"16px"
              }}
            >
              {product.english}
            </p>




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

                  [product.name]:selectedWeight

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
                selected[product.name]
                ?
                selected[product.name].price
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
