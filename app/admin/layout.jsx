"use client";

import { useRouter } from "next/navigation";


export default function AdminLayout({children}){


const router = useRouter();



function logout(){

localStorage.removeItem("adminLogin");

router.push("/admin/login");

}



return (

<div

style={{

direction:"rtl",

minHeight:"100vh",

background:"#f5fff5"

}}

>


{/* FIXED ADMIN HEADER */}

<header

style={{

position:"sticky",

top:0,

zIndex:999,

background:"#1b5e20",

color:"white",

padding:"15px 25px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

flexWrap:"wrap",

gap:"15px"

}}

>


<div>

<h2 style={{margin:0}}>

🌿 Ghar Ka Dawakhana

</h2>

<span>

Admin Portal

</span>

</div>




<nav

style={{

display:"flex",

gap:"10px",

flexWrap:"wrap"

}}

>


<button

onClick={()=>router.push("/admin/dashboard")}

style={btn}

>

🏠 Dashboard

</button>



<button

onClick={()=>router.push("/admin/products")}

style={btn}

>

📦 Manage Products

</button>



<button

onClick={()=>router.push("/admin/products")}

style={btn}

>

➕ Add Product

</button>



<button

onClick={()=>router.push("/products")}

style={btn}

>

🛒 Website

</button>




<button

onClick={logout}

style={logoutBtn}

>

Logout

</button>



</nav>


</header>




{/* ہر Admin Page یہاں آئے گا */}

<section>

{children}

</section>



</div>

);


}



const btn={

background:"white",

color:"#1b5e20",

border:"none",

padding:"10px 15px",

borderRadius:"20px",

cursor:"pointer",

fontWeight:"bold"

};



const logoutBtn={

background:"#c62828",

color:"white",

border:"none",

padding:"10px 20px",

borderRadius:"20px",

cursor:"pointer",

fontWeight:"bold"

};
