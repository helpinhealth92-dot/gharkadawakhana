"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (

    <nav
      style={{
        background: "#1b5e20",
        color: "white",
        padding: "12px 20px",
        direction: "rtl"
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >

        {/* Logo + Name */}

        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >

            <img
              src="/logo.png"
              alt="گھر کا دَواخانہ"
              width="55"
              height="55"
              style={{
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />


            <h2>
              🌿 گھر کا دَواخانہ
            </h2>

          </div>

        </Link>



        {/* Menu */}

        <div>

          <Link
            href="/"
            style={{
              color:"white",
              margin:"8px",
              textDecoration:"none"
            }}
          >
            ہوم
          </Link>


          <Link
            href="/products"
            style={{
              color:"white",
              margin:"8px",
              textDecoration:"none"
            }}
          >
            مصنوعات
          </Link>


          <Link
            href="/cart"
            style={{
              color:"white",
              margin:"8px",
              textDecoration:"none"
            }}
          >
            🛒 کارٹ ({cart.length})
          </Link>


        </div>


      </div>


    </nav>

  );
}
