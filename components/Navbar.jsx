"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../app/context/CartContext";


export default function Navbar(){

  const { cart } = useCart();


  return (

    <nav
      style={{
        direction:"rtl",
        background:"#1b5e20",
        color:"white",
        padding:"15px 25px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:"wrap",
        gap:"15px"
      }}
    >


      {/* Logo + Name */}

      <Link
        href="/"
        style={{
          textDecoration:"none",
          color:"white",
          display:"flex",
          alignItems:"center",
          gap:"10px"
        }}
      >

        <div
          style={{
            width:"45px",
            height:"45px",
            background:"white",
            borderRadius:"50%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#1b5e20",
            fontSize:"25px"
          }}
        >
          🌿
        </div>


        <div>

          <h2
            style={{
              margin:0,
              fontSize:"22px"
            }}
          >
            گھر کا دَواخانہ
          </h2>


          <small>
            حکمت اور قدرتی مصنوعات
          </small>

        </div>


      </Link>




      {/* Menu */}

      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"15px",
          flexWrap:"wrap"
        }}
      >


        <Link
          href="/"
          style={linkStyle}
        >
          🏠 ہوم
        </Link>



        <Link
          href="/products"
          style={linkStyle}
        >
          🌿 مصنوعات
        </Link>




        <Link
          href="/cart"
          style={linkStyle}
        >

          🛒 کارٹ ({cart.length})

        </Link>




        <Link
          href="/contact"
          style={linkStyle}
        >
          📞 رابطہ
        </Link>



      </div>



    </nav>

  );

}



const linkStyle={

color:"white",

textDecoration:"none",

fontSize:"16px",

padding:"8px 12px",

borderRadius:"20px",

background:"rgba(255,255,255,0.15)"

};
