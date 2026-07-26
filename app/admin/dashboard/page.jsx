"use client";

import { useRouter } from "next/navigation";


export default function AdminDashboard(){

  const router = useRouter();


  return (

    <main

      style={{

        minHeight:"100vh",

        background:"#f1f8e9",

        padding:"40px",

        direction:"rtl"

      }}

    >


      <h1

        style={{

          textAlign:"center",

          color:"#1b5e20"

        }}

      >

        🌿 Ghar Ka Dawakhana Admin Panel

      </h1>



      <div

        style={{

          display:"grid",

          gridTemplateColumns:

          "repeat(auto-fit,minmax(250px,1fr))",

          gap:"25px",

          marginTop:"40px"

        }}

      >



        <button

          onClick={()=>router.push("/admin/products")}

          style={cardButton}

        >

          📦 Manage Products

          <br/>

          مصنوعات کا انتظام

        </button>




        <button

          onClick={()=>router.push("/products")}

          style={cardButton}

        >

          🛒 View Website Products

          <br/>

          مصنوعات دیکھیں

        </button>




      </div>



    </main>

  );

}



const cardButton={

  padding:"30px",

  background:"white",

  border:"none",

  borderRadius:"25px",

  boxShadow:"0 8px 25px #ccc",

  color:"#1b5e20",

  fontSize:"20px",

  cursor:"pointer"

};
