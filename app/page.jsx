"use client";

import Link from "next/link";

export default function Home() {

  return (

    <main
      style={{
        direction:"rtl",
        fontFamily:"sans-serif",
        background:"#f5fff5",
        minHeight:"100vh"
      }}
    >


      {/* Hero Section */}

      <section
        style={{
          background:"#1b5e20",
          color:"white",
          padding:"50px 20px",
          textAlign:"center",
          borderRadius:"0 0 30px 30px"
        }}
      >

        <h1
          style={{
            fontSize:"40px",
            marginBottom:"15px"
          }}
        >
          🌿 گھر کا دَواخانہ
        </h1>


        <p
          style={{
            fontSize:"20px"
          }}
        >
          خالص جڑی بوٹیاں اور قدرتی ہربل مصنوعات
        </p>


        <p>
          حکمت اور قدرتی علاج کے اصولوں کے مطابق
        </p>


        <Link href="/products">

          <button
            style={{
              marginTop:"20px",
              padding:"15px 35px",
              borderRadius:"30px",
              border:"none",
              background:"#ffffff",
              color:"#1b5e20",
              fontSize:"18px",
              cursor:"pointer"
            }}
          >
            🛒 مصنوعات دیکھیں
          </button>

        </Link>


      </section>



      {/* About */}

      <section
        style={{
          padding:"30px",
          textAlign:"center"
        }}
      >

        <h2
          style={{
            color:"#1b5e20"
          }}
        >
          ہمارے بارے میں
        </h2>


        <p
          style={{
            lineHeight:"2",
            fontSize:"18px"
          }}
        >
          گھر کا دَواخانہ میں آپ کو قدرتی جڑی بوٹیاں،
          ہربل پاؤڈر، تیل اور روایتی حکمت سے متعلق
          مصنوعات فراہم کی جاتی ہیں۔
        </p>


      </section>




      {/* Categories */}

      <section
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:"20px",
          padding:"20px"
        }}
      >


        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            textAlign:"center",
            boxShadow:"0 4px 10px #ddd"
          }}
        >
          🌿
          <h3>جڑی بوٹیاں</h3>
          <p>قدرتی پاؤڈر اور سفوف</p>
        </div>



        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            textAlign:"center",
            boxShadow:"0 4px 10px #ddd"
          }}
        >
          🧴
          <h3>قدرتی تیل</h3>
          <p>کلونجی، زیتون اور بادام روغن</p>
        </div>



        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            textAlign:"center",
            boxShadow:"0 4px 10px #ddd"
          }}
        >
          🍯
          <h3>ہربل مصنوعات</h3>
          <p>خالص اور معیاری مصنوعات</p>
        </div>


      </section>



      {/* WhatsApp */}

      <div
        style={{
          textAlign:"center",
          padding:"30px"
        }}
      >

        <a
          href="https://wa.me/923477357397"
          target="_blank"
        >

          <button
            style={{
              background:"#25D366",
              color:"white",
              border:"none",
              padding:"15px 40px",
              borderRadius:"30px",
              fontSize:"18px"
            }}
          >
            🟢 WhatsApp رابطہ
          </button>

        </a>


      </div>



    </main>

  );

}
