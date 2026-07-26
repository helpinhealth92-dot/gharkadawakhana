"use client";

import Link from "next/link";
import Image from "next/image";


export default function Footer(){

  return (

    <footer
      style={{
        direction:"rtl",
        background:"#103b1a",
        color:"white",
        padding:"50px 25px 20px",
        marginTop:"50px"
      }}
    >


      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"35px"
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
              alt="Ghar Ka Dawakhana Logo"
              style={{
                borderRadius:"50%",
                objectFit:"cover"
              }}
            />


            <div>

              <h2
                style={{
                  margin:0
                }}
              >
                گھر کا دَواخانہ
              </h2>


              <p
                style={{
                  margin:0
                }}
              >
                Herbalist Afzal Nadeem
              </p>

            </div>


          </div>



          <p
            style={{
              lineHeight:"2",
              marginTop:"20px"
            }}
          >

            دیسی جڑی بوٹیاں، قدرتی ہربل مصنوعات
            اور حکمت کے اصولوں کے مطابق معیاری مصنوعات۔

          </p>


        </div>





        {/* Links */}

        <div>

          <h3>
            اہم لنکس
          </h3>


          <p>
            <Link
              href="/"
              style={linkStyle}
            >
              Home
            </Link>
          </p>


          <p>
            <Link
              href="/products"
              style={linkStyle}
            >
              Products
            </Link>
          </p>


          <p>
            <Link
              href="/contact"
              style={linkStyle}
            >
              Contact Us
            </Link>
          </p>


        </div>





        {/* Contact */}

        <div>


          <h3>
            رابطہ کریں
          </h3>


          <p>
            📞 03477357397
          </p>


          <a
            href="https://wa.me/923477357397"
            target="_blank"
            style={{
              display:"inline-block",
              background:"#25D366",
              color:"white",
              padding:"10px 20px",
              borderRadius:"25px",
              textDecoration:"none"
            }}
          >
            WhatsApp
          </a>


        </div>





        {/* Qualification */}

        <div>


          <h3>
            معلومات
          </h3>


          <p>
            Qualified B.U.M.S, MPhil
          </p>


          <p>
            Ⓡ Registered with
            <br/>
            National Council for Tibb,
            <br/>
            Islamabad (NCT)
          </p>


        </div>



      </div>





      <div
        style={{
          borderTop:"1px solid rgba(255,255,255,0.3)",
          marginTop:"40px",
          paddingTop:"20px",
          textAlign:"center"
        }}
      >

        © 2026 گھر کا دَواخانہ  
        <br/>
        تمام حقوق محفوظ ہیں

      </div>



    </footer>

  );

}



const linkStyle={

color:"white",

textDecoration:"none"

};
