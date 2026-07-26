"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";


export default function Products(){


  const { addToCart } = useCart();


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
      selected[product.id] || weights[0];



    addToCart({

      id:product.id,

      name:product.urduName,

      englishName:product.englishName,

      weight:choose.name,

      price:choose.price,

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

          color:"#1b5e20",

          fontSize:"35px",

          marginBottom:"30px"

        }}

      >

        🌿 ہماری تمام مصنوعات

      </h1>




      <div

        style={{

          display:"grid",

          gridTemplateColumns:

          "repeat(auto-fit,minmax(260px,1fr))",

          gap:"25px"

        }}

      >




      {

        products.map((product)=>(



          <div

            key={product.id}

            style={{

              background:"white",

              borderRadius:"25px",

              padding:"20px",

              boxShadow:"0 8px 25px #ddd",

              textAlign:"center"

            }}

          >




            {

              product.image ?

              (

                <img

                  src={product.image}

                  alt={product.englishName}

                  style={{

                    width:"100%",

                    height:"180px",

                    objectFit:"cover",

                    borderRadius:"20px"

                  }}

                />

              )

              :

              (

                <div

                  style={{

                    height:"180px",

                    background:"#e8f5e9",

                    borderRadius:"20px",

                    display:"flex",

                    alignItems:"center",

                    justifyContent:"center",

                    fontSize:"45px"

                  }}

                >

                  🌿

                </div>

              )

            }






            <h2

              style={{

                color:"#1b5e20"

              }}

            >

              {product.urduName}

            </h2>



            <h3>

              {product.englishName}

            </h3>





            <p>

              {product.description}

            </p>





            <select

              style={{

                width:"100%",

                padding:"12px",

                borderRadius:"12px",

                margin:"10px 0"

              }}



              onChange={(e)=>{


                const item = weights.find(

                  w=>w.name===e.target.value

                );



                setSelected({

                  ...selected,

                  [product.id]:item

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






            <p

              style={{

                fontWeight:"bold",

                color:"#2e7d32"

              }}

            >

              قیمت:

              {" "}

              {

                selected[product.id]

                ?

                selected[product.id].price

                :

                weights[0].price

              }


            </p>






            <button

              onClick={()=>addProduct(product)}

              style={{

                background:"#1b5e20",

                color:"white",

                border:"none",

                padding:"13px 25px",

                borderRadius:"30px",

                cursor:"pointer",

                fontSize:"16px"

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
