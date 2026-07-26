"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";


export default function Navbar(){

const {cart}=useCart();


return(

<nav

style={{

direction:"rtl",

background:"#ffffff",

padding:"15px 30px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

flexWrap:"wrap",

boxShadow:"0 3px 15px #ddd",

position:"sticky",

top:0,

zIndex:50

}}

>



{/* Logo */}

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

width:"55px",

height:"55px",

borderRadius:"50%",

background:"#1b5e20",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"30px"

}}

>

🌿

</div>



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


<small>

Herbalist Afzal Nadeem

</small>


</div>



</div>


</Link>





{/* Menu */}


<div

style={{

display:"flex",

gap:"12px",

alignItems:"center",

flexWrap:"wrap"

}}

>


<MenuLink href="/" text="🏠 Home"/>

<MenuLink href="/products" text="🌿 Products"/>

<MenuLink href="/contact" text="📞 Contact Us"/>



<Link

href="/cart"

style={cartStyle}

>

🛒 Cart

<span

style={{

background:"#ffffff",

color:"#1b5e20",

borderRadius:"50%",

padding:"2px 8px",

marginRight:"5px",

fontWeight:"bold"

}}

>

{cart.length}

</span>


</Link>



</div>




</nav>


)

}




function MenuLink({href,text}){


return(

<Link

href={href}

style={{

textDecoration:"none",

color:"#1b5e20",

fontWeight:"bold",

padding:"10px 15px",

borderRadius:"25px",

background:"#f1f8e9"

}}

>

{text}

</Link>

)

}





const cartStyle={

textDecoration:"none",

background:"#1b5e20",

color:"white",

padding:"10px 18px",

borderRadius:"25px",

fontWeight:"bold",

display:"flex",

alignItems:"center"

};
