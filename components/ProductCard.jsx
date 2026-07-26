"use client";

import { useCart } from "../app/context/CartContext";

export default function ProductCard({product}) {

  const { addToCart } = useCart();


  function handleCart(){

    addToCart({

      name: product.name,

      englishName: product.englishName,

      description: product.description,

      price: product.price,

      weight: product.weight || "",

      quantity: 1

    });

  }



  return (

    <div

      style={{

        background:"#ffffff",

        padding:"20px",

        borderRadius:"20px",

        boxShadow:"0 5px 18px rgba(0,0,0,0.10)",

        textAlign:"center",

        direction:"rtl"

      }}

    >


      <img

        src={product.image || "/logo.png"}

        alt={product.name}

        width="200"

        height="200"

        style={{

          objectFit:"cover",

          borderRadius:"15px",

          maxWidth:"100%"

        }}

      />




      <h2

        style={{

          color:"#1b5e20",

          marginTop:"15px"

        }}

      >

        {product.name}

      </h2>




      <h3

        style={{

          color:"#555",

          fontSize:"17px",

          fontWeight:"500"

        }}

      >

        {product.englishName}

      </h3>





      <p>

        {product.description}

      </p>




      <p

        style={{

          fontWeight:"bold",

          color:"#1b5e20"

        }}

      >

        Price: {product.price}

      </p>





      <button

        onClick={handleCart}

        style={{

          background:"#1b5e20",

          color:"white",

          border:"none",

          padding:"12px 25px",

          borderRadius:"25px",

          cursor:"pointer",

          fontSize:"16px"

        }}

      >

        🛒 کارٹ میں شامل کریں

      </button>



    </div>

  );

      }
