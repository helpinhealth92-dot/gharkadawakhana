"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";

export default function Header(){

  const { cart } = useCart();

  return (

    <header
      style={{
        background:"#1b5e20",
        color:"white",
        padding:"15px 25px",
        direction:"rtl"
      }}
    >

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          flexWrap:"wrap"
        }}
      >

        <h2>
          🌿 گھر کا دَواخانہ
        </h2>


        <nav>

          <Link
            href="/"
            style={{
              color:"white",
              margin:"10px",
              textDecoration:"none"
            }}
          >
            ہوم
          </Link>


          <Link
            href="/products"
            style={{
              color:"white",
              margin:"10px",
              textDecoration:"none"
            }}
          >
            مصنوعات
          </Link>


          <Link
            href="/cart"
            style={{
              color:"white",
              margin:"10px",
              textDecoration:"none"
            }}
          >
            🛒 کارٹ ({cart.length})
          </Link>


        </nav>


      </div>

    </header>

  );
}
