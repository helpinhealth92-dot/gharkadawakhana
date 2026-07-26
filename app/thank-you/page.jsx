"use client";

import Link from "next/link";

export default function ThankYouPage() {

  return (

    <main
      style={{
        direction:"rtl",
        minHeight:"100vh",
        background:"#f5fff5",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"30px"
      }}
    >

      <div
        style={{
          background:"white",
          padding:"40px",
          borderRadius:"25px",
          textAlign:"center",
          boxShadow:"0 5px 20px #ddd"
        }}
      >

        <h1
          style={{
            color:"#1b5e20",
            fontSize:"35px"
          }}
        >
          ✅ شکریہ!
        </h1>


        <h2>
          آپ کا آرڈر کامیابی سے موصول ہو گیا ہے
        </h2>


        <p
          style={{
            fontSize:"18px",
            lineHeight:"2"
          }}
        >
          گھر کا دَواخانہ آپ کے اعتماد کا شکر گزار ہے۔
          <br/>
          ہماری ٹیم جلد آپ سے رابطہ کرے گی۔
        </p>



        <Link href="/products">

          <button
            style={{
              background:"#1b5e20",
              color:"white",
              border:"none",
              padding:"15px 35px",
              borderRadius:"30px",
              fontSize:"17px",
              cursor:"pointer"
            }}
          >
            🌿 مزید مصنوعات دیکھیں
          </button>

        </Link>


      </div>


    </main>

  );

}
