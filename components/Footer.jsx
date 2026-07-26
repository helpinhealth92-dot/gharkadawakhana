"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (

    <footer
      style={{
        direction:"rtl",
        background:"#0b3d1b",
        color:"#fff",
        padding:"45px 25px 20px",
        marginTop:"50px"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
          gap:"30px",
          alignItems:"start"
        }}
      >


        {/* Brand */}

        <div>

          <div
            style={{
              display:"flex",
              alignItems:"center",
              gap:"12px"
            }}
          >

            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="Logo"
              style={{
                borderRadius:"50%"
              }}
            />


            <div>

              <h2
                style={{
                  margin:"0",
                  fontSize:"24px"
                }}
              >
                گھر کا دَواخانہ
              </h2>

              <p
                style={{
                  margin:"5px 0",
                  color:"#d8e8d8"
                }}
              >
                Herbalist Afzal Nadeem
              </p>

            </div>

          </div>


          <p
            style={{
              lineHeight:"2",
              marginTop:"20px",
              color:"#e6e6e6"
            }}
          >
            دیسی جڑی بوٹیاں، قدرتی ہربل مصنوعات
            اور حکمت کے اصولوں کے مطابق معیاری مصنوعات۔
          </p>


        </div>





        {/* Links */}

        <div>

          <h3
            style={{
              color:"#d4af37"
            }}
          >
            اہم لنکس
          </h3>


          <p>
            <Link href="/" style={link}>
              🏠 Home
            </Link>
          </p>


          <p>
            <Link href="/products" style={link}>
              🌿 Products
            </Link>
          </p>


          <p>
            <Link href="/contact" style={link}>
              📞 Contact Us
            </Link>
          </p>


        </div>





        {/* Contact */}

        <div>

          <h3
            style={{
              color:"#d4af37"
            }}
          >
            رابطہ کریں
          </h3>


          <p>
            📱 03477357397
          </p>


          <a
            href="https://wa.me/923477357397"
            target="_blank"
            style={{
              background:"#25D366",
              color:"#fff",
              padding:"10px 25px",
              borderRadius:"30px",
              textDecoration:"none",
              display:"inline-block",
              marginTop:"10px"
            }}
          >
            WhatsApp
          </a>


        </div>





        {/* Qualification */}

        <div>

          <h3
            style={{
              color:"#d4af37"
            }}
          >
            معلومات
          </h3>


          <p>
            Qualified B.U.M.S, MPhil
          </p>


          <p
            style={{
              lineHeight:"1.8"
            }}
          >
            Ⓡ Registered with
            <br/>
            National Council for Tibb
            <br/>
            Islamabad (NCT)
          </p>


        </div>



      </div>





      <div
        style={{
          borderTop:"1px solid rgba(255,255,255,.3)",
          marginTop:"35px",
          paddingTop:"15px",
          textAlign:"center",
          color:"#ddd"
        }}
      >

        © 2026 گھر کا دَواخانہ  
        <br/>
        تمام حقوق محفوظ ہیں

      </div>


    </footer>

  );

}



const link = {

color:"#fff",

textDecoration:"none"

};
