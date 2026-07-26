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

        background:"#f1f8e9",

        padding:"30px",

        direction:"rtl"

      }}

    >



      <div

        style={{

          maxWidth:"1000px",

          margin:"auto"

        }}

      >



        <h1

          style={{

            textAlign:"center",

            color:"#1b5e20",

            marginBottom:"30px"

          }}

        >

          🌿 Ghar Ka Dawakhana Admin Panel

        </h1>




        <div

          style={{

            display:"grid",

            gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

            gap:"20px"

          }}

        >




          <div style={cardStyle}>

            <h2>📦 مصنوعات</h2>

            <p>
              مصنوعات شامل کریں، قیمت تبدیل کریں اور تصاویر لگائیں۔
            </p>


            <button

              style={buttonStyle}

              onClick={()=>router.push("/admin/products")}

            >

              Products Manage کریں

            </button>


          </div>





          <div style={cardStyle}>

            <h2>🛒 آرڈرز</h2>

            <p>
              نئے آرڈرز اور کسٹمر کی تفصیل دیکھیں۔
            </p>


            <button

              style={buttonStyle}

              onClick={()=>router.push("/admin/orders")}

            >

              Orders دیکھیں

            </button>


          </div>






          <div style={cardStyle}>

            <h2>👥 Customers</h2>

            <p>
              کسٹمرز کا ریکارڈ۔
            </p>


            <button

              style={buttonStyle}

            >

              Customers

            </button>


          </div>





          <div style={cardStyle}>

            <h2>⚙️ Settings</h2>

            <p>
              Website settings اور account management۔
            </p>


            <button

              style={buttonStyle}

            >

              Settings

            </button>


          </div>




        </div>





        <button

          onClick={logout}

          style={{

            marginTop:"40px",

            background:"#c62828",

            color:"white",

            border:"none",

            padding:"12px 30px",

            borderRadius:"25px",

            cursor:"pointer",

            display:"block",

            marginLeft:"auto",

            marginRight:"auto"

          }}

        >

          Logout

        </button>




      </div>



    </main>


  );

}




const cardStyle={

background:"white",

padding:"25px",

borderRadius:"20px",

boxShadow:"0 5px 20px #ddd",

textAlign:"center"

};



const buttonStyle={

background:"#1b5e20",

color:"white",

border:"none",

padding:"12px 20px",

borderRadius:"25px",

cursor:"pointer",

fontSize:"15px"

};
