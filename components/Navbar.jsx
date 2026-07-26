"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../app/context/CartContext";


export default function Navbar(){

  const { cart } = useCart();


  return (

    <header
      style={{
        direction:"rtl",
        background:"#ffffff",
        boxShadow:"0 4px 20px rgba(0,0,0,0.10)",
        position:"sticky",
        top:0,
        zIndex:100
      }}
    >

      <nav
        style={{
          maxWidth:"1200px",
          margin:"auto",
          padding:"12px 25px",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          gap:"20px",
          flexWrap:"wrap"
        }}
      >


        {/* Logo + Brand */}

        <Link
          href="/"
          style={{
            textDecoration:"none",
            color:"#1b5e20"
          }}
        >

          <div
            style={{
              display:"flex",
              alignItems:"center",
              gap:"12px"
            }}
          >

            <Image
              src="/logo.png"
              width={65}
              height={65}
              alt="Ghar Ka Dawakhana Logo"
              style={{
                borderRadius:"50%",
                objectFit:"cover",
                boxShadow:"0 4px 12px #ccc"
              }}
            />


            <div>

              <h2
                style={{
                  margin:0,
                  fontSize:"22px",
                  fontWeight:"bold"
                }}
              >
                گھر کا دَواخانہ
              </h2>


              <p
                style={{
                  margin:0,
                  fontSize:"14px",
                  color:"#555"
                }}
              >
                Herbalist Afzal Nadeem
              </p>

            </div>


          </div>


        </Link>





        {/* Menu */}

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            flexWrap:"wrap"
          }}
        >

          <Menu href="/" text="🏠 Home" />

          <Menu href="/products" text="🌿 Products" />

          <Menu href="/contact" text="📞 Contact Us" />


        </div>





        {/* Cart */}

        <Link
          href="/cart"
          style={{
            textDecoration:"none"
          }}
        >

          <div
            style={{
              background:"#1b5e20",
              color:"white",
              padding:"12px 22px",
              borderRadius:"30px",
              fontWeight:"bold",
              display:"flex",
              alignItems:"center",
              gap:"8px",
              boxShadow:"0 5px 15px rgba(27,94,32,.3)"
            }}
          >

            🛒 Cart

            <span
              style={{
                background:"white",
                color:"#1b5e20",
                borderRadius:"50%",
                width:"25px",
                height:"25px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              {cart.length}
            </span>


          </div>


        </Link>


      </nav>


    </header>

  );

}




function Menu({href,text}){

return(

<Link

href={href}

style={{

textDecoration:"none",

color:"#1b5e20",

background:"#f1f8e9",

padding:"10px 16px",

borderRadius:"25px",

fontWeight:"bold"

}}

>

{text}

</Link>

)

}
