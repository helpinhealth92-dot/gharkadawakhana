"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard(){

  const router = useRouter();


  function logout(){

    localStorage.removeItem("adminLogin");

    router.push("/admin/login");

  }



  return (

    <main

      style={{

        minHeight:"100vh",

        background:"#f5fff5",

        padding:"30px",

        direction:"rtl"

      }}

    >


      <header

        style={{

          background:"#1b5e20",

          color:"white",

          padding:"20px",

          borderRadius:"20px",

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center"

        }}

      >


        <h1>

          🌿 Ghar Ka Dawakhana

          <br/>

          Admin Panel

        </h1>



        <button

          onClick={logout}

          style={{

            background:"white",

            color:"#1b5e20",

            border:"none",

            padding:"12px 25px",

            borderRadius:"25px",

            cursor:"pointer",

            fontWeight:"bold"

          }}

        >

          Logout

        </button>



      </header>





      <section

        style={{

          marginTop:"40px",

          display:"grid",

          gridTemplateColumns:

          "repeat(auto-fit,minmax(250px,1fr))",

          gap:"25px"

        }}

      >




        <DashboardCard

          title="📦 Manage Products"

          text="مصنوعات دیکھیں، تبدیل کریں"

          click={()=>router.push("/admin/products")}

        />




        <DashboardCard

          title="➕ Add Product"

          text="نئی مصنوعات شامل کریں"

          click={()=>router.push("/admin/products")}

        />





        <DashboardCard

          title="✏️ Edit Products"

          text="نام، قیمت، وزن تبدیل کریں"

          click={()=>router.push("/admin/products")}

        />





        <DashboardCard

          title="🛒 Website Products"

          text="اصل ویب سائٹ دیکھیں"

          click={()=>router.push("/products")}

        />





        <DashboardCard

          title="📋 Orders"

          text="آرڈرز کا انتظام"

          click={()=>alert("Orders System Coming Soon")}

        />





      </section>



    </main>


  );

}




function DashboardCard({

title,

text,

click

}){


return (

<div

onClick={click}

style={{

background:"white",

padding:"30px",

borderRadius:"25px",

boxShadow:"0 8px 25px #ddd",

cursor:"pointer",

textAlign:"center",

border:"1px solid #e0e0e0"

}}

>


<h2

style={{

color:"#1b5e20"

}}

>

{title}

</h2>


<p>

{text}

</p>


</div>

);


}
