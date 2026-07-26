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

        padding:"25px",

        direction:"rtl"

      }}

    >


      {/* TOP HEADER */}

      <header

        style={{

          background:"#1b5e20",

          color:"white",

          padding:"20px",

          borderRadius:"20px",

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          flexWrap:"wrap",

          gap:"15px"

        }}

      >


        <div>

          <h1 style={{margin:0}}>

            🌿 Ghar Ka Dawakhana

          </h1>

          <p style={{margin:"5px 0 0"}}>

            Admin Panel

          </p>

        </div>




        <button

          onClick={logout}

          style={{

            background:"white",

            color:"#1b5e20",

            border:"none",

            padding:"12px 28px",

            borderRadius:"30px",

            cursor:"pointer",

            fontWeight:"bold",

            fontSize:"16px"

          }}

        >

          🚪 Logout

        </button>



      </header>





      {/* TOP MENU */}

      <nav

        style={{

          marginTop:"25px",

          background:"white",

          padding:"15px",

          borderRadius:"20px",

          display:"flex",

          justifyContent:"center",

          gap:"15px",

          flexWrap:"wrap",

          boxShadow:"0 5px 20px #ddd"

        }}

      >


        <MenuButton

          text="🏠 Dashboard"

          click={()=>router.push("/admin/dashboard")}

        />


        <MenuButton

          text="📦 Manage Products"

          click={()=>router.push("/admin/products")}

        />


        <MenuButton

          text="➕ Add Product"

          click={()=>router.push("/admin/products")}

        />


        <MenuButton

          text="✏️ Edit Products"

          click={()=>router.push("/admin/products")}

        />


        <MenuButton

          text="🛒 Website"

          click={()=>router.push("/products")}

        />


      </nav>






      {/* DASHBOARD CARDS */}


      <section

        style={{

          marginTop:"35px",

          display:"grid",

          gridTemplateColumns:

          "repeat(auto-fit,minmax(250px,1fr))",

          gap:"25px"

        }}

      >



        <DashboardCard

          title="📦 Manage Products"

          text="مصنوعات دیکھیں اور تبدیل کریں"

          click={()=>router.push("/admin/products")}

        />



        <DashboardCard

          title="➕ Add Product"

          text="نئی جڑی بوٹی شامل کریں"

          click={()=>router.push("/admin/products")}

        />



        <DashboardCard

          title="✏️ Edit Products"

          text="نام، قیمت، وزن تبدیل کریں"

          click={()=>router.push("/admin/products")}

        />



        <DashboardCard

          title="🖼 Images"

          text="مصنوعات کی تصاویر کا انتظام"

          click={()=>router.push("/admin/products")}

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






function MenuButton({text,click}){


return (

<button

onClick={click}

style={{

background:"#1b5e20",

color:"white",

border:"none",

padding:"12px 20px",

borderRadius:"25px",

cursor:"pointer",

fontSize:"15px"

}}

>

{text}

</button>

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
