export default function Cart() {

const whatsappNumber = "923477357397";

return (

<main
style={{
padding:"30px",
direction:"rtl",
fontFamily:"sans-serif"
}}
>

<h1 style={{textAlign:"center"}}>
گھر کا دَواخانہ - آرڈر
</h1>


<div
style={{
border:"1px solid #ddd",
borderRadius:"15px",
padding:"20px",
marginTop:"20px"
}}
>

<h2>
آپ کی کارٹ
</h2>

<div
style={{
padding:"15px",
background:"#f5f5f5",
borderRadius:"10px"
}}
>

<p>
مصنوع: ہلدی پاؤڈر
</p>

<p>
مقدار: 1
</p>

<p>
قیمت: 500 روپے
</p>

</div>


<h2>
گاہک کی معلومات
</h2>


<input
style={{
width:"100%",
padding:"12px",
marginBottom:"10px"
}}
placeholder="اپنا نام لکھیں"
/>


<input
style={{
width:"100%",
padding:"12px",
marginBottom:"10px"
}}
placeholder="موبائل نمبر"
/>


<textarea
style={{
width:"100%",
padding:"12px",
height:"100px"
}}
placeholder="مکمل پتہ لکھیں"
/>


<h3>
ادائیگی کا طریقہ
</h3>


<label>

<input
type="radio"
checked
readOnly
/>

 کیش آن ڈیلیوری

</label>


<br/><br/>


<a
href={`https://wa.me/${whatsappNumber}?text=میں%20گھر%20کا%20دَواخانہ%20سے%20آرڈر%20کرنا%20چاہتا%20ہوں`}
target="_blank"
>

<button
style={{
padding:"14px 25px",
borderRadius:"10px",
cursor:"pointer"
}}
>

🟢 WhatsApp پر آرڈر بھیجیں

</button>

</a>


</div>


</main>

);

}
