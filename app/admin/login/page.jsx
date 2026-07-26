"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AdminLogin(){


  const router = useRouter();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [error,setError] = useState("");



  function handleLogin(e){

    e.preventDefault();



    // Temporary login
    // بعد میں database authentication لگائیں گے

    if(
      email === "admin@gharkadawakhana.com" &&
      password === "admin123"
    ){

      localStorage.setItem(
        "adminLogin",
        "true"
      );


      router.push("/admin/dashboard");


    }else{


      setError(
        "Email یا Password غلط ہے"
      );


    }


  }





  return (


    <main

      style={{

        minHeight:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        background:"#f1f8e9",

        direction:"rtl"

      }}

    >



      <form

        onSubmit={handleLogin}

        style={{

          background:"white",

          width:"350px",

          padding:"35px",

          borderRadius:"20px",

          boxShadow:"0 8px 25px #ccc",

          textAlign:"center"

        }}

      >



        <h1

          style={{

            color:"#1b5e20",

            marginBottom:"25px"

          }}

        >

          Admin Login

        </h1>




        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          style={inputStyle}

        />




        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          style={inputStyle}

        />





        {
          error &&

          <p

            style={{

              color:"red"

            }}

          >

            {error}

          </p>

        }




        <button

          type="submit"

          style={buttonStyle}

        >

          Login

        </button>




      </form>



    </main>


  );


}




const inputStyle={

width:"100%",

padding:"12px",

margin:"10px 0",

borderRadius:"10px",

border:"1px solid #ccc",

fontSize:"16px"

};



const buttonStyle={

width:"100%",

padding:"12px",

marginTop:"15px",

border:"none",

borderRadius:"25px",

background:"#1b5e20",

color:"white",

fontSize:"17px",

cursor:"pointer"

};
