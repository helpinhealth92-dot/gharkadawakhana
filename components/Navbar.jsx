"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        direction: "rtl"
      }}
    >

      <h2>
        گھر کا دَواخانہ
      </h2>


      <Link href="/cart">
        🛒 کارٹ ({cart.length})
      </Link>


    </nav>
  );
}
