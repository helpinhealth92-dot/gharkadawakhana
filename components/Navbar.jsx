"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../app/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar(){

  const { cart } = useCart();

  const router = useRouter();

  const [admin,setAdmin] = useState(false);

  const [open,setOpen] = useState(false);


  useEffect(()=>{

    const login = localStorage.getItem("adminLogin");

    if(login){
      setAdmin(true);
    }

  },[]);



  function logout(){

    localStorage.removeItem("adminLogin");

    setAdmin(false);

    setOpen(false);

    router.push("/");

  }



return (

<header

style={{

direction:"rtl",

background:"#fff",

boxShadow:"0 3px 18px rgba(0,0,0,.08)",

position:"sticky",

top:0,

zIndex:1000

}}

>


<nav

style={{

maxWidth:"1200px",

margin:"auto",

padding:"15px 20px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

flexWrap:"wrap",

gap:"15px"

}}

>


{/* LOGO */}

<Link href="/"

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

alt="logo"

style={{

borderRadius:"50%"

}}

/>


<div>

<h2 style={{margin:0}}>

گھر کا دواخانہ

</h2>


<p style={{margin:0,color:"#555"}}>

Herbalist Afzal Nadeem

</p>


</div>


</div>


</Link>





{/* MENU */}

<div

style={{

display:"flex",

gap:"8px",

alignItems:"center",

flexWrap:"wrap"

}}

>


<NavItem href="/" text="🏠 Home"/>



<NavItem href="/contact" text="📞 Contact"/>





{/* ADMIN BUTTON - PRODUCTS KI JAGAH */}

{

admin ?

<div

style={{

position:"relative"

}}

>


<button

onClick={()=>setOpen(!open)}

style={adminButton}

>

⚙️ Admin Dashboard ▼

</button>



{

open &&

<div

style={dropdown}

>


<MenuItem href="/admin/dashboard" text="📊 Dashboard"/>


<MenuItem href="/admin/products" text="➕ Add Product"/>


<MenuItem href="/admin/products" text="📦 Manage Products"/>


<MenuItem href="/admin/products" text="✏️ Edit Products"/>



<button

onClick={logout}

style={logoutButton}

>

🚪 Logout

</button>


</div>

}


</div>


:

<NavItem href="/admin/login" text="🔐 Admin Login"/>

}




{/* PRODUCTS - ADMIN KI PURANI JAGAH */}

<NavItem href="/products" text="🌿 Products"/>




</div>






{/* CART */}

<Link

href="/cart"

style={{textDecoration:"none"}}

>


<div

style={{

background:"#1b5e20",

color:"white",

padding:"10px 18px",

borderRadius:"30px",

fontWeight:"bold"

}}

>

🛒 Cart ({cart.length})

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

background:"#f1f8e9",

color:"#1b5e20",

padding:"10px 18px",

borderRadius:"25px",

fontWeight:"700"

}}

>

{text}

</Link>

);

}



function MenuItem({href,text}){

return(

<Link

href={href}

style={{

display:"block",

padding:"10px",

color:"#1b5e20",

textDecoration:"none",

fontWeight:"bold"

}}

>

{text}

</Link>

);

}




const adminButton={

background:"#1b5e20",

color:"#fff",

border:"none",

padding:"12px 22px",

borderRadius:"30px",

fontWeight:"bold",

cursor:"pointer"

};



const dropdown={

position:"absolute",

top:"50px",

right:0,

background:"#fff",

width:"230px",

padding:"15px",

borderRadius:"20px",

boxShadow:"0 10px 30px #aaa",

zIndex:5000

};



const logoutButton={

width:"100%",

background:"#c62828",

color:"#fff",

border:"none",

padding:"10px",

borderRadius:"20px",

fontWeight:"bold",

cursor:"pointer"

};
