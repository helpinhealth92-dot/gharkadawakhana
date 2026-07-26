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



function submitOrder(){


let message =
"نیا آرڈر - گھر کا دَواخانہ%0A%0A";



cart.forEach((item)=>{


message +=

`مصنوعہ: ${item.name}%0A
وزن: ${item.weight}%0A
قیمت: ${item.price}%0A
مقدار: ${item.quantity}%0A%0A`;



});



message +=

`نام: ${form.name}%0A
فون: ${form.phone}%0A
پتہ: ${form.address}%0A
شہر: ${form.city}%0A
ادائیگی: ${payment}`;



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



<input

placeholder="نام"

style={inputStyle}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>



<br/><br/>



<input

placeholder="موبائل نمبر"

style={inputStyle}

onChange={(e)=>

setForm({

...form,

phone:e.target.value

})

}

/>



<br/><br/>



<textarea

placeholder="مکمل پتہ"

style={inputStyle}

onChange={(e)=>

setForm({

...form,

address:e.target.value

})

}

/>



<br/><br/>



<input

placeholder="شہر"

style={inputStyle}

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

آرڈر کنفرم کریں

</button>



</div>



</main>


)

}



const inputStyle={

width:"100%",

padding:"12px",

borderRadius:"10px",

border:"1px solid #ccc",

fontSize:"16px"

};
