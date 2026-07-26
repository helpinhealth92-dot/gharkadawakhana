"use client";

import { useCart } from "../context/CartContext";

export default function Products() {

  const { addToCart } = useCart();


  const products = [

    "ہلدی پاؤڈر",
    "لہسن پاؤڈر",
    "ادرک پاؤڈر",
    "دارچینی پاؤڈر",
    "زیرہ پاؤڈر",
    "سونف پاؤڈر",
    "کلونجی پاؤڈر",
    "اجوائن پاؤڈر",
    "میتھی دانہ پاؤڈر",
    "ملیٹھی پاؤڈر",
    "آملہ پاؤڈر",
    "نیم پاؤڈر",
    "برہمی پاؤڈر",
    "اشوگندھا پاؤڈر",
    "سہانجنا پاؤڈر",
    "سفید موصلی پاؤڈر",
    "ستاور پاؤڈر",
    "السی پاؤڈر",
    "تخم ملنگا",
    "اسپغول کا چھلکا",
    "کالی مرچ پاؤڈر",
    "لونگ پاؤڈر",
    "الائچی پاؤڈر",
    "جائفل پاؤڈر",
    "گلاب کی پتی پاؤڈر",
    "ہربل ہاضمہ چورن",
    "طاقت سفوف",
    "معجون",
    "خمیرہ",
    "جوارش",
    "شہد خالص",
    "زیتون کا تیل",
    "کلونجی کا تیل",
    "بادام روغن",
    "گولڈن ملک ہربل مکس"

  ];


  return (

    <main
      style={{
        direction:"rtl",
        padding:"30px",
        background:"#f5fff5",
        minHeight:"100vh"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          color:"#1b5e20"
        }}
      >
        🌿 تمام مصنوعات
      </h1>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}
      >

      {products.map((product,index)=>(

        <div
          key={index}
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"20px",
            boxShadow:"0 5px 15px #ddd",
            textAlign:"center"
          }}
        >

          <div
            style={{
              height:"130px",
              background:"#e8f5e9",
              borderRadius:"15px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"45px"
            }}
          >
            تصویر بعد میں
          </div>


          <h2>
            {product}
          </h2>


          <p>
            100 گرام — قیمت: ______
          </p>

          <p>
            250 گرام — قیمت: ______
          </p>

          <p>
            500 گرام — قیمت: ______
          </p>

          <p>
            1 کلو — قیمت: ______
          </p>


          <button
            onClick={()=>addToCart(product)}
            style={{
              background:"#1b5e20",
              color:"white",
              border:"none",
              padding:"12px 25px",
              borderRadius:"25px"
            }}
          >
            🛒 کارٹ میں شامل کریں
          </button>


        </div>

      ))}


      </div>


    </main>

  );

}
