"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";


export default function Checkout(){

  const { cart } = useCart();

  const router = useRouter();


  const [payment,setPayment] = useState("Cash On Delivery");


  const [form,setForm] = useState({
    name:"",
    phone:"",
    address:"",
    city:""
  });



  // Product total

  const total = cart.reduce(
    (sum,item)=>{

      const price =
      Number(
        item.price?.replace(/\D/g,"")
      ) || 0;


      return sum + (price * (item.quantity || 1));

    },0
  );



  // Total weight calculate

  const totalWeight = cart.reduce(
    (sum,item)=>{

      let weight = item.weight || "";

      let grams = 0;


      if(weight.includes("100")){
        grams = 100;
      }

      else if(weight.includes("250")){
        grams = 250;
      }

      else if(weight.includes("500")){
        grams = 500;
      }

      else if(weight.includes("1 کلو")){
        grams = 1000;
      }


      return sum + grams;

    },0
  );



  // Delivery Charges

  let deliveryCharge = 200;


  if(totalWeight > 1000){
    deliveryCharge = 300;
  }


  if(totalWeight > 2000){
    deliveryCharge = 400;
  }


  if(totalWeight > 3000){
    deliveryCharge = 500;
  }


  const finalTotal = total + deliveryCharge;



  function submitOrder(){


    let message =
    "🌿 گھر کا دَواخانہ نیا آرڈر%0A%0A";



    cart.forEach((item,index)=>{


      message +=

      `${index+1})
${item.name}
وزن: ${item.weight}
قیمت: ${item.price}
مقدار: ${item.quantity}

`;

    });



    message +=

`مصنوعات کی کل رقم:
${total} روپے

ڈیلیوری چارجز:
${deliveryCharge} روپے

مکمل رقم:
${finalTotal} روپے

نام:
${form.name}

فون:
${form.phone}

پتہ:
${form.address}

شہر:
${form.city}

ادائیگی:
${payment}`;



    window.open(

      `https://wa.me/923477357397?text=${message}`,

      "_blank"

    );



    router.push("/thank-you");


  }





  return(


    <main

    style={{

      direction:"rtl",

      background:"#f5fff5",

      minHeight:"100vh",

      padding:"30px"

    }}

    >



    <h1>
      📝 آرڈر مکمل کریں
    </h1>




    <div

    style={{

      background:"white",

      padding:"25px",

      borderRadius:"20px"

    }}

    >



    <h2>
      🛒 آرڈر کی تفصیل
    </h2>




    {
      cart.map((item,index)=>(


        <div

        key={index}

        style={{

          borderBottom:"1px solid #ddd",

          padding:"10px"

        }}

        >

        <p>
          🌿 {item.name}
        </p>


        <p>
          وزن: {item.weight}
        </p>


        <p>
          قیمت: {item.price}
        </p>


        <p>
          مقدار: {item.quantity}
        </p>


        </div>


      ))
    }





    <h3>
      مصنوعات کی کل رقم: {total} روپے
    </h3>


    <h3>
      ڈیلیوری چارجز: {deliveryCharge} روپے
    </h3>


    <h2>
      کل ادائیگی: {finalTotal} روپے
    </h2>




    <hr/>




    <h2>
      کسٹمر کی معلومات
    </h2>




    <input

    style={inputStyle}

    placeholder="نام"

    onChange={(e)=>

      setForm({

        ...form,

        name:e.target.value

      })

    }

    />



    <br/><br/>




    <input

    style={inputStyle}

    placeholder="موبائل نمبر"

    onChange={(e)=>

      setForm({

        ...form,

        phone:e.target.value

      })

    }

    />



    <br/><br/>




    <textarea

    style={inputStyle}

    placeholder="مکمل پتہ"

    onChange={(e)=>

      setForm({

        ...form,

        address:e.target.value

      })

    }

    />



    <br/><br/>




    <input

    style={inputStyle}

    placeholder="شہر"

    onChange={(e)=>

      setForm({

        ...form,

        city:e.target.value

      })

    }

    />





    <h3>
      ادائیگی کا طریقہ
    </h3>



    <label>

    <input

    type="radio"

    checked={payment==="Cash On Delivery"}

    onChange={()=>setPayment("Cash On Delivery")}

    />

    Cash On Delivery

    </label>




    <br/>




    <label>

    <input

    type="radio"

    checked={payment==="EasyPaisa"}

    onChange={()=>setPayment("EasyPaisa")}

    />

    EasyPaisa

    </label>




    <br/>




    <label>

    <input

    type="radio"

    checked={payment==="JazzCash"}

    onChange={()=>setPayment("JazzCash")}

    />

    JazzCash

    </label>





    <br/><br/>




    <button

    onClick={submitOrder}

    style={{

      background:"#25D366",

      color:"white",

      border:"none",

      padding:"15px 40px",

      borderRadius:"30px",

      fontSize:"18px"

    }}

    >

    ✅ آرڈر کنفرم کریں

    </button>




    </div>



    </main>


  );

}




const inputStyle={

width:"100%",

padding:"12px",

borderRadius:"10px",

border:"1px solid #ccc",

fontSize:"16px"

};
