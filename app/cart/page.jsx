export default function Cart() {
  return (
    <main
      style={{
        padding: "30px",
        direction: "rtl",
        fontFamily: "sans-serif"
      }}
    >

      <h1 style={{textAlign:"center"}}>
        آپ کی کارٹ
      </h1>

      <p style={{textAlign:"center"}}>
        ابھی آپ کی کارٹ خالی ہے۔
      </p>

      <div style={{
        marginTop:"30px",
        padding:"20px",
        border:"1px solid #ddd",
        borderRadius:"15px"
      }}>

        <h2>
          Checkout
        </h2>

        <p>
          نام:
        </p>

        <input
          style={{
            width:"100%",
            padding:"10px"
          }}
          placeholder="اپنا نام لکھیں"
        />

        <p>
          فون نمبر:
        </p>

        <input
          style={{
            width:"100%",
            padding:"10px"
          }}
          placeholder="فون نمبر"
        />

        <p>
          پتہ:
        </p>

        <textarea
          style={{
            width:"100%",
            padding:"10px"
          }}
          placeholder="مکمل پتہ"
        />

        <h3>
          ادائیگی کا طریقہ
        </h3>

        <label>
          <input type="radio" name="payment" />
          کیش آن ڈیلیوری
        </label>

        <br/><br/>

        <button
          style={{
            padding:"12px 25px",
            borderRadius:"10px"
          }}
        >
          آرڈر مکمل کریں
        </button>

      </div>

    </main>
  );
}
