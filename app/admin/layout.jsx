"use client";

import { useRouter } from "next/navigation";


export default function AdminLayout({ children }) {

  const router = useRouter();


  function logout(){

    localStorage.removeItem("adminLogin");

    router.push("/admin/login");

  }


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f5fff5",
        direction:"rtl"
      }}
    >


      {/* ADMIN TOP BAR */}

      <header

        style={{

          position:"sticky",

          top:0,

          zIndex:1000,

          background:"#1b5e20",

          color:"white",

          padding:"15px 20px",

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

          <small>

            Admin Portal

          </small>

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

            style={menuBtn}

          >

            🏠 Dashboard

          </button>



          <button

            onClick={()=>router.push("/admin/products")}

            style={menuBtn}

          >

            📦 Manage Products

          </button>



          <button

            onClick={()=>router.push("/admin/products")}

            style={menuBtn}

          >

            ➕ Add Product

          </button>



          <button

            onClick={()=>router.push("/products")}

            style={menuBtn}

          >

            🛒 Website

          </button>



          <button

            onClick={logout}

            style={logoutBtn}

          >

            🚪 Logout

          </button>



        </nav>



      </header>



      {/* PAGE CONTENT */}

      <main>

        {children}

      </main>



    </div>

  );

}




const menuBtn = {

  background:"white",

  color:"#1b5e20",

  border:"none",

  padding:"10px 18px",

  borderRadius:"25px",

  cursor:"pointer",

  fontWeight:"bold"

};



const logoutBtn = {

  background:"#c62828",

  color:"white",

  border:"none",

  padding:"10px 20px",

  borderRadius:"25px",

  cursor:"pointer",

  fontWeight:"bold"

};
