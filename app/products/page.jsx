export default function Products() {

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
"سہانجنا (مورنگا) پاؤڈر",
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

<main style={{
padding:"30px",
direction:"rtl",
fontFamily:"sans-serif"
}}>

<h1 style={{
textAlign:"center"
}}>
گھر کا دَواخانہ
</h1>

<h2 style={{
textAlign:"center"
}}>
تمام مصنوعات
</h2>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>


{products.map((item,index)=>(

<div key={index}
style={{
border:"1px solid #ddd",
borderRadius:"15px",
padding:"20px",
textAlign:"center"
}}>

<div style={{
height:"120px",
background:"#f3f3f3",
borderRadius:"10px",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}>
تصویر یہاں ہوگی
</div>


<h3>
{item}
</h3>


<p>
وزن: 100 گرام / 250 گرام / 500 گرام
</p>


<p>
قیمت: جلد درج ہوگی
</p>


<a
href={`https://wa.me/923477357397?text=میں ${item} کے بارے میں معلومات چاہتا ہوں`}
target="_blank"
>

<button style={{
padding:"10px",
margin:"5px",
borderRadius:"8px"
}}>
🟢 WhatsApp آرڈر
</button>

</a>


<a href="/cart">

<button style={{
padding:"10px",
margin:"5px",
borderRadius:"8px"
}}>
🛒 کارٹ میں شامل کریں
</button>

</a>


</div>

))}


</div>


</main>

)

}
