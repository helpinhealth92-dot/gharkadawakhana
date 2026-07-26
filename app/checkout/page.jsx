"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";


export default function Checkout(){

const {cart}=useCart();

const router=useRouter();


const [payment,setPayment]=useState("Cash On Delivery");


const [form,setForm]=useState({
name:"",
phone:"",
address:"",
city:""
});



const total = cart.reduce(
(sum,item)=>{

let price =
Number(
item.price?.replace(/\D/g,"")
) || 0;

return sum + (price * (item.quantity || 1));

},
0
);



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

`کل رقم: ${total} روپے

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
📝 آرڈر کی تفصیل
</h1>



<div

style={{

background:"white",

padding:"25px",

borderRadius:"20px",

marginBottom:"20px"

}}

>

<h2>
🛒 مصنوعات
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



<h2>
کل رقم: {total} روپے
</h2>


</div>





<div

style={{

background:"white",

padding:"25px",

borderRadius:"20px"

}}

>


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


)

}



const inputStyle={

width:"100%",

padding:"12px",

borderRadius:"10px",

border:"1px solid #ccc",

fontSize:"16px"

};
