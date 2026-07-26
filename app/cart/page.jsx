"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage(){

const {cart, removeFromCart}=useCart();


return(

<main
style={{
direction:"rtl",
padding:"30px",
background:"#f5fff5",
minHeight:"100vh"
}}
>

<h1>
🛒 آپ کا کارٹ
</h1>


{
cart.length===0 ?

<p>
کارٹ خالی ہے
</p>

:

cart.map((item,index)=>(

<div
key={index}
style={{
background:"white",
padding:"20px",
margin:"15px 0",
borderRadius:"15px"
}}
>

<h2>
🌿 {item.name}
</h2>

<p>
وزن: {item.weight}
</p>

<p>
قیمت: {item.price}
</p>

<p>
مقدار: {item.quantity}
</p>


<button
onClick={()=>removeFromCart(index)}
>
❌ ختم کریں
</button>


</div>

))

}


{
cart.length>0 &&

<div
style={{
textAlign:"center",
marginTop:"30px"
}}
>

<Link href="/checkout">

<button
style={{
background:"#1b5e20",
color:"white",
padding:"15px 40px",
border:"none",
borderRadius:"30px",
fontSize:"18px"
}}
>

Checkout کریں

</button>

</Link>

</div>

}


</main>

)

}
