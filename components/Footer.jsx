"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-box brand">

          <Image
            src="/logo.png"
            width={75}
            height={75}
            alt="Ghar Ka Dawakhana"
            className="footer-logo"
          />

          <h2>گھر کا دَواخانہ</h2>

          <p>
            Herbalist Afzal Nadeem
          </p>

          <span>
            دیسی جڑی بوٹیاں اور قدرتی ہربل مصنوعات
          </span>

        </div>




        <div className="footer-box">

          <h3>اہم لنکس</h3>

          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>

        </div>





        <div className="footer-box">

          <h3>رابطہ کریں</h3>

          <p>📞 03477357397</p>

          <a
            href="https://wa.me/923477357397"
            className="whatsapp"
          >
            WhatsApp
          </a>

        </div>





        <div className="footer-box">

          <h3>معلومات</h3>

          <p>
            Qualified B.U.M.S, MPhil
          </p>

          <p>
            Ⓡ Registered with
            <br/>
            National Council for Tibb
            <br/>
            Islamabad (NCT)
          </p>

        </div>


      </div>



      <div className="copyright">

        © 2026 گھر کا دَواخانہ
        <br/>
        تمام حقوق محفوظ ہیں

      </div>



      <style jsx>{`

      .footer{
        background:#073b18;
        color:white;
        padding:40px 20px 20px;
        margin-top:40px;
      }


      .footer-container{
        max-width:1200px;
        margin:auto;
        display:flex;
        justify-content:space-between;
        gap:25px;
        flex-wrap:wrap;
        text-align:center;
      }


      .footer-box{
        flex:1;
        min-width:220px;
        padding:20px;
      }


      .footer-box h3{
        color:#d4af37;
        margin-bottom:20px;
      }


      .footer-box a{
        display:block;
        color:white;
        text-decoration:none;
        margin:12px;
        font-size:17px;
      }


      .footer-box p,
      .footer-box span{
        line-height:1.8;
      }


      .footer-logo{
        border-radius:50%;
        margin-bottom:10px;
      }


      .brand h2{
        margin:5px;
      }


      .whatsapp{
        background:#25D366;
        padding:10px 25px;
        border-radius:30px;
        display:inline-block !important;
      }


      .copyright{
        border-top:1px solid #ffffff55;
        margin-top:25px;
        padding-top:20px;
        text-align:center;
      }



      @media(max-width:700px){

        .footer-container{
          flex-direction:column;
          align-items:center;
        }


        .footer-box{
          width:100%;
        }

      }

      `}</style>


    </footer>
  );
}
