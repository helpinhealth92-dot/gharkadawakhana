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
        boxShadow:"0 3px 18px rgba(0,0,0,0.08)",
        position:"sticky",
        top:0,
        zIndex:100
      }}
    >

      <nav
        style={{
          maxWidth:"1200px",
          margin:"auto",
          padding:"10px 20px",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          gap:"15px",
          flexWrap:"wrap"
        }}
      >


        {/* Brand */}

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
              gap:"10px"
            }}
          >

            <Image
              src="/logo.png"
              width={55}
              height={55}
              alt="Ghar Ka Dawakhana Logo"
              style={{
                borderRadius:"50%",
                objectFit:"cover"
              }}
            />


            <div>

              <h2
                style={{
                  margin:0,
                  fontSize:"21px",
                  fontWeight:"800"
                }}
              >
                گھر کا دَواخانہ
              </h2>


              <p
                style={{
                  margin:0,
                  fontSize:"13px",
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
            justifyContent:"center",
            gap:"8px",
            flexWrap:"wrap"
          }}
        >


          <NavItem
            href="/"
            text="🏠 Home"
          />


          <NavItem
            href="/products"
            text="🌿 Products"
          />


          <NavItem
            href="/contact"
            text="📞 Contact Us"
          />


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
              color:"#fff",
              padding:"10px 18px",
              borderRadius:"30px",
              display:"flex",
              alignItems:"center",
              gap:"8px",
              fontWeight:"bold",
              boxShadow:"0 5px 12px rgba(27,94,32,0.25)"
            }}
          >

            🛒 Cart


            <span
              style={{
                background:"#fff",
                color:"#1b5e20",
                width:"24px",
                height:"24px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"14px"
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




function NavItem({href,text}){

return(

<Link

href={href}

style={{

textDecoration:"none",

color:"#1b5e20",

background:"#f1f8e9",

padding:"9px 15px",

borderRadius:"25px",

fontWeight:"700",

fontSize:"15px"

}}

>

{text}

</Link>

)

          }
