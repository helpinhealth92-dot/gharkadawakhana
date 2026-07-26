"use client";

import { useRouter } from "next/navigation";


export default function AdminDashboard(){

const router = useRouter();


return (

<main

style={{

minHeight:"100vh",

background:"#f5fff5",

padding:"30px",

direction:"rtl"

}}

>


<h1

style={{

color:"#1b5e20",

textAlign:"center"

}}

>

Admin Dashboard

</h1>


<div

style={{

background:"white",

padding:"25px",

borderRadius:"25px",

textAlign:"center",

boxShadow:"0 5px 20px #ddd"

}}

>


<h2>

Ghar Ka Dawakhana

</h2>


<p>

Manage your products from Navbar Admin Menu

</p>


<button

onClick={()=>router.push("/admin/products")}

style={{

background:"#1b5e20",

color:"white",

border:"none",

padding:"12px 30px",

borderRadius:"25px",

fontWeight:"bold"

}}

>

📦 Manage Products

</button>


</div>


</main>

);

}
