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


    if(
      email === "helpinhealth92@gmail.com" &&
      password === "MA01091981Afzalnadeem@"
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

          width:"360px",
          background:"white",
          padding:"35px",
          borderRadius:"25px",
          boxShadow:"0 10px 30px #ccc",
          textAlign:"center"

        }}

      >


        <h1

          style={{

            color:"#1b5e20",
            marginBottom:"25px"

          }}

        >

          🌿 Admin Login

        </h1>




        <input

          type="email"

          dir="ltr"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          placeholder="Enter Email"

          style={inputStyle}

        />





        <input

          type="password"

          dir="ltr"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          placeholder="Enter Password"

          style={inputStyle}

        />





        {

          error &&

          <p

            style={{

              color:"red",

              fontSize:"14px"

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




const inputStyle = {

  width:"100%",
  padding:"13px",
  margin:"10px 0",
  borderRadius:"12px",
  border:"1px solid #ccc",
  fontSize:"16px",
  direction:"ltr",
  textAlign:"left",
  boxSizing:"border-box"

};



const buttonStyle = {

  width:"100%",
  marginTop:"15px",
  padding:"13px",
  border:"none",
  borderRadius:"30px",
  background:"#1b5e20",
  color:"white",
  fontSize:"17px",
  cursor:"pointer"

};
