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

    router.push("/");

  }



  return (

<header

style={{

direction:"rtl",

background:"#ffffff",

boxShadow:"0 3px 18px rgba(0,0,0,0.08)",

position:"sticky",

top:0,

zIndex:1000

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


{/* LOGO */}

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

alt="Logo"

style={{

borderRadius:"50%"

}}

/>


<div>


<h2 style={{margin:0}}>

گھر کا دَواخانہ

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

flexWrap:"wrap",

alignItems:"center"

}}

>


<NavItem href="/" text="🏠 Home"/>


<NavItem href="/products" text="🌿 Products"/>


<NavItem href="/contact" text="📞 Contact"/>





{/* ADMIN */}

{

admin ?

<div

style={{position:"relative"}}

>


<button

onClick={()=>setOpen(!open)}

style={adminBtn}

>

⚙️ Admin Dashboard ▼

</button>




{

open &&

<div

style={{

position:"absolute",

top:"45px",

right:0,

background:"white",

width:"220px",

borderRadius:"15px",

boxShadow:"0 8px 25px #ccc",

padding:"10px",

zIndex:2000

}}

>


<MenuLink href="/admin/dashboard" text="📊 Dashboard"/>


<MenuLink href="/admin/products" text="➕ Add Product"/>


<MenuLink href="/admin/products" text="📦 Manage Products"/>


<MenuLink href="/admin/products" text="✏️ Edit Products"/>


<MenuLink href="/admin/orders" text="📋 Orders"/>



<button

onClick={logout}

style={logoutBtn}

>

🚪 Logout

</button>



</div>


}


</div>


:

<NavItem

href="/admin/login"

text="🔐 Admin Login"

/>

}




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

return (

<Link

href={href}

style={{

textDecoration:"none",

color:"#1b5e20",

background:"#f1f8e9",

padding:"9px 15px",

borderRadius:"25px",

fontWeight:"700"

}}

>

{text}

</Link>

);

}




function MenuLink({href,text}){

return (

<Link

href={href}

style={{

display:"block",

padding:"10px",

textDecoration:"none",

color:"#1b5e20",

fontWeight:"bold"

}}

>

{text}

</Link>

);

}




const adminBtn={

background:"#1b5e20",

color:"white",

border:"none",

padding:"10px 15px",

borderRadius:"25px",

cursor:"pointer",

fontWeight:"bold"

};



const logoutBtn={

width:"100%",

background:"#c62828",

color:"white",

border:"none",

padding:"10px",

borderRadius:"20px",

cursor:"pointer",

fontWeight:"bold"

};
