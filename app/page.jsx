export default function Home() {
  return (
    <main style={{padding:"30px", fontFamily:"sans-serif", direction:"rtl"}}>

      <header style={{textAlign:"center"}}>
        <h1 style={{fontSize:"40px"}}>
          گھر کا دَواخانہ
        </h1>

        <p style={{fontSize:"20px"}}>
          حکیم محمد افضل کے زیرِ نگرانی
          <br />
          طبِ یونانی اور قدرتی علاج
        </p>
      </header>


      <section style={{
        marginTop:"40px",
        padding:"25px",
        borderRadius:"15px",
        background:"#f3f3f3",
        textAlign:"center"
      }}>

        <h2>
          صحت کا قدرتی راستہ
        </h2>

        <p>
          یہاں آپ کو قدرتی مصنوعات،
          حکمت کے نسخے اور صحت سے متعلق معلومات ملیں گی۔
        </p>

      </section>


      <section style={{
        marginTop:"30px",
        textAlign:"center"
      }}>

        <h2>
          ہماری مصنوعات
        </h2>

        <p>
          قدرتی اور معیاری مصنوعات جلد دستیاب ہوں گی۔
        </p>


        <a href="/products">
          <button style={{
            padding:"12px 25px",
            fontSize:"18px",
            borderRadius:"10px",
            cursor:"pointer"
          }}>
            مصنوعات دیکھیں
          </button>
        </a>

      </section>


      <footer style={{
        marginTop:"50px",
        textAlign:"center"
      }}>
        © گھر کا دَواخانہ
      </footer>

    </main>
  );
}
