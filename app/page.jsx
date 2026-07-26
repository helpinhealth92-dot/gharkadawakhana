"use client";

import Link from "next/link";


export default function Home(){

return(

<main
style={{
direction:"rtl",
background:"#f5fff5",
minHeight:"100vh",
fontFamily:"sans-serif"
}}
>


{/* Hero */}

<section

style={{

background:"linear-gradient(135deg,#1b5e20,#43a047)",

color:"white",

padding:"70px 20px",

textAlign:"center",

borderRadius:"0 0 50px 50px"

}}

>


<div

style={{

maxWidth:"800px",

margin:"auto"

}}

>


<h1

style={{

fontSize:"45px",

marginBottom:"10px",

fontWeight:"bold"

}}

>

🌿 گھر کا دَواخانہ

</h1>



<h2

style={{

fontSize:"32px",

fontWeight:"bold"

}}

>

Herbalist Afzal Nadeem

</h2>



<div

style={{

background:"rgba(255,255,255,0.15)",

padding:"20px",

borderRadius:"20px",

margin:"25px auto",

maxWidth:"450px"

}}

>


<p

style={{

fontSize:"20px",

fontWeight:"bold"

}}

>

Qualified B.U.M.S, MPhil

</p>



<p>

Ⓡ Registered with

<br/>

National Council for Tibb, Islamabad (NCT)

</p>



</div>




<p

style={{

fontSize:"20px",

lineHeight:"2"

}}

>

قدرتی جڑی بوٹیاں، ہربل مصنوعات

اور حکمت کے اصولوں کے مطابق معیاری مصنوعات

</p>



<div

style={{

marginTop:"30px",

display:"flex",

justifyContent:"center",

gap:"15px",

flexWrap:"wrap"

}}

>


<Link href="/products">

<button

style={buttonGreen}

>

🌿 مصنوعات دیکھیں

</button>

</Link>



<Link href="/contact">

<button

style={buttonWhite}

>

📞 Contact Us

</button>

</Link>


</div>


</div>


</section>





{/* Categories */}


<section

style={{

padding:"50px 20px",

textAlign:"center"

}}

>


<h2

style={{

color:"#1b5e20",

fontSize:"30px"

}}

>

ہماری مصنوعات

</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",

gap:"25px",

marginTop:"30px"

}}

>


<Card
icon="🌿"
title="جڑی بوٹیاں"
text="خالص قدرتی پاؤڈر اور سفوف"
/>


<Card
icon="🧴"
title="قدرتی تیل"
text="کلونجی، زیتون اور دیگر تیل"
/>



<Card
icon="🍯"
title="ہربل مصنوعات"
text="قدرتی اور معیاری مصنوعات"
/>



</div>


</section>





{/* About */}


<section

style={{

background:"white",

padding:"40px",

textAlign:"center"

}}

>


<h2

style={{

color:"#1b5e20"

}}

>

گھر کا دَواخانہ کے بارے میں

</h2>


<p

style={{

fontSize:"18px",

lineHeight:"2"

}}

>

گھر کا دَواخانہ قدرتی جڑی بوٹیوں

اور ہربل مصنوعات کے ذریعے صحت مند زندگی

کے لیے معیاری مصنوعات فراہم کرتا ہے۔

</p>



</section>



</main>

)

}





function Card({icon,title,text}){


return(

<div

style={{

background:"white",

padding:"30px",

borderRadius:"25px",

boxShadow:"0 5px 15px #ddd"

}}

>


<div

style={{

fontSize:"40px"

}}

>

{icon}

</div>



<h3>

{title}

</h3>



<p>

{text}

</p>



</div>


)

}




const buttonGreen={

background:"white",

color:"#1b5e20",

border:"none",

padding:"15px 35px",

borderRadius:"30px",

fontSize:"18px",

cursor:"pointer"

};



const buttonWhite={

background:"transparent",

color:"white",

border:"2px solid white",

padding:"15px 35px",

borderRadius:"30px",

fontSize:"18px",

cursor:"pointer"

};
