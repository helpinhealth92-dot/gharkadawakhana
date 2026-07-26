"use client";

import Link from "next/link";

export default function ThankYou(){

return(

<main
style={{
direction:"rtl",
minHeight:"100vh",
background:"#f5fff5",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"30px",
textAlign:"center"
}}
>


<div
style={{
background:"white",
padding:"40px",
borderRadius:"25px",
boxShadow:"0 5px 20px #ddd"
}}
>


<h1
style={{
color:"#1b5e20"
}}
>
✅ شکریہ!
</h1>


<h2>
آپ کا آرڈر موصول ہو گیا ہے
</h2>


<p
style={{
fontSize:"18px",
lineHeight:"2"
}}
>
ہم آپ کے آرڈر کی تصدیق جلد کریں گے۔
<br/>
گھر کا دَواخانہ آپ کا اعتماد قدر کی نگاہ سے دیکھتا ہے۔
</p>



<Link href="/products">

<button
style={{
background:"#1b5e20",
color:"white",
border:"none",
padding:"15px 35px",
borderRadius:"30px",
fontSize:"17px"
}}
>

مزید مصنوعات دیکھیں

</button>

</Link>


</div>


</main>

)

}
