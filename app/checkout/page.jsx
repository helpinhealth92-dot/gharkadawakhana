"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";


export default function Checkout(){

const {cart}=useCart();


const [form,setForm]=useState({

name:"",
phone:"",
address:"",
city:""

});


function submitOrder(){

let message="نیا آرڈر%0A%0A";


cart.forEach((item)=>{

message +=
`${item.name}
وزن: ${item.weight}
قیمت: ${item.price}
مقدار: ${item.quantity}

`;

});


message +=
`نام:
${form.name}

فون:
${form.phone}

پتہ:
${form.address}

شہر:
${form.city}

ادائیگی:
Cash On Delivery`;


window.open(
`https://wa.me/923477357397?text=${message}`,
"_blank"
);


}



return(

<main
style={{
direction:"rtl",
padding:"30px",
background:"#f5fff5",
minHeight:"100vh"
}}
>


<h1>
📝 آرڈر مکمل کریں
</h1>



<input
placeholder="نام"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>


<br/><br/>


<input
placeholder="موبائل نمبر"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>


<br/><br/>


<textarea
placeholder="مکمل پتہ"
onChange={(e)=>setForm({...form,address:e.target.value})}
/>


<br/><br/>


<input
placeholder="شہر"
onChange={(e)=>setForm({...form,city:e.target.value})}
/>


<br/><br/>


<h3>
ادائیگی کا طریقہ
</h3>


<p>
◉ Cash On Delivery
</p>



<button
onClick={submitOrder}
style={{
background:"#25D366",
color:"white",
padding:"15px 40px",
border:"none",
borderRadius:"30px"
}}
>

آرڈر کنفرم کریں

</button>



</main>

)

  }
