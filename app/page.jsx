"use client";

import Link from "next/link";

export default function Home() {

  const products = [
    "ہلدی پاؤڈر",
    "کلونجی پاؤڈر",
    "اشوگندھا پاؤڈر",
    "سہانجنا پاؤڈر",
    "گولڈن ملک ہربل مکس",
    "کلونجی کا تیل"
  ];

  return (
    <main
      style={{
        direction:"rtl",
        fontFamily:"Arial",
        background:"#f5fff5",
        minHeight:"100vh"
      }}
    >

      {/* Hero */}

      <section
        style={{
          background:"linear-gradient(135deg,#1b5e20,#388e3c)",
          color:"white",
          padding:"60px 20px",
          textAlign:"center",
          borderRadius:"0 0 40px 40px"
        }}
      >

        <h1 style={{fontSize:"42px"}}>
          🌿 گھر کا دَواخانہ
        </h1>

        <p style={{fontSize:"22px"}}>
          قدرتی جڑی بوٹیاں اور خالص ہربل مصنوعات
        </p>

        <p>
          حکمت اور قدرتی اصولوں کے مطابق
        </p>

        <Link href="/products">

          <button
            style={{
              marginTop:"25px",
              padding:"15px 40px",
              borderRadius:"30px",
              border:"none",
              background:"white",
              color:"#1b5e20",
              fontSize:"18px"
            }}
          >
            🛒 مصنوعات دیکھیں
          </button>

        </Link>

      </section>


      {/* About */}

      <section
        style={{
          padding:"35px",
          textAlign:"center"
        }}
      >

        <h2 style={{color:"#1b5e20"}}>
          ہمارے بارے میں
        </h2>

        <p style={{fontSize:"18px",lineHeight:"2"}}>
          گھر کا دَواخانہ پر آپ کو خالص جڑی بوٹیاں،
          ہربل پاؤڈر، قدرتی تیل اور روایتی حکمت
          سے متعلق مصنوعات دستیاب ہیں۔
        </p>

      </section>



      {/* Categories */}

      <section
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          padding:"20px"
        }}
      >

        {[
          ["🌿","جڑی بوٹیاں","قدرتی پاؤڈر اور سفوف"],
          ["🧴","قدرتی تیل","کلونجی، زیتون اور بادام روغن"],
          ["🍯","ہربل مصنوعات","معیاری اور خالص مصنوعات"]
        ].map((item,index)=>(

          <div
            key={index}
            style={{
              background:"white",
              padding:"25px",
              borderRadius:"20px",
              textAlign:"center",
              boxShadow:"0 5px 15px #ddd"
            }}
          >

            <h1>{item[0]}</h1>
            <h3>{item[1]}</h3>
            <p>{item[2]}</p>

          </div>

        ))}

      </section>



      {/* Featured Products */}

      <section style={{padding:"30px"}}>

        <h2 style={{textAlign:"center",color:"#1b5e20"}}>
          مشہور مصنوعات
        </h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
            gap:"15px"
          }}
        >

        {products.map((p,index)=>(

          <div
            key={index}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"15px",
              textAlign:"center"
            }}
          >

            🌿
            <h3>{p}</h3>

          </div>

        ))}

        </div>

      </section>



      {/* WhatsApp */}

      <div style={{textAlign:"center",padding:"30px"}}>

        <a
          href="https://wa.me/923477357397"
          target="_blank"
        >

          <button
            style={{
              background:"#25D366",
              color:"white",
              border:"none",
              padding:"15px 45px",
              borderRadius:"30px",
              fontSize:"18px"
            }}
          >
            🟢 WhatsApp آرڈر
          </button>

        </a>

      </div>


    </main>
  );
}
