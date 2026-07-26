"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";


export default function Navbar(){

  const { cart } = useCart();


  return (

    <header
      style={{
        direction:"rtl",
        background:"#ffffff",
        boxShadow:"0 4px 20px rgba(0,0,0,0.08)",
        position:"sticky",
        top:0,
        zIndex:100
      }}
    >


      <nav

      style={{

        maxWidth:"1200px",

        margin:"auto",

        padding:"15px 25px",

        display:"flex",

        alignItems:"center",

        justifyContent:"space-between",

        gap:"20px",

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

            gap:"12px"

          }}

          >



            <div

            style={{

              width:"60px",

              height:"60px",

              borderRadius:"50%",

              background:"linear-gradient(135deg,#1b5e20,#66bb6a)",

              display:"flex",

              justifyContent:"center",

              alignItems:"center",

              fontSize:"32px",

              boxShadow:"0 5px 15px #ccc"

            }}

            >

              🌿

            </div>




            <div>


              <h2

              style={{

                margin:0,

                fontSize:"24px",

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



          <NavButton href="/" text="🏠 Home"/>


          <NavButton href="/products" text="🌿 Products"/>


          <NavButton href="/contact" text="📞 Contact Us"/>



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

            display:"flex",

            alignItems:"center",

            gap:"8px",

            fontWeight:"bold",

            boxShadow:"0 5px 15px rgba(27,94,32,0.3)"

          }}

          >

            🛒 Cart


            <span

            style={{

              background:"white",

              color:"#1b5e20",

              borderRadius:"50%",

              minWidth:"25px",

              height:"25px",

              display:"flex",

              alignItems:"center",

              justifyContent:"center"

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





function NavButton({href,text}){


return(

<Link

href={href}

style={{

textDecoration:"none",

color:"#1b5e20",

background:"#f1f8e9",

padding:"10px 18px",

borderRadius:"25px",

fontWeight:"600",

fontSize:"15px",

transition:"0.3s"

}}

>

{text}

</Link>


)

}
