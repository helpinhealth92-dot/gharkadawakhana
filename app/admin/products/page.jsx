"use client";

import { useState } from "react";


export default function AdminProducts(){


  const [product,setProduct] = useState({

    urduName:"",
    englishName:"",
    description:"",
    image:"",
    weight:"1 کلو",
    price:""

  });



  const [products,setProducts] = useState([]);



  function handleChange(e){

    setProduct({

      ...product,

      [e.target.name]: e.target.value

    });

  }



  function addProduct(e){

    e.preventDefault();


    setProducts([

      ...products,

      product

    ]);



    setProduct({

      urduName:"",
      englishName:"",
      description:"",
      image:"",
      weight:"1 کلو",
      price:""

    });


  }




  return (


    <main

      style={{

        minHeight:"100vh",

        background:"#f1f8e9",

        padding:"30px",

        direction:"rtl"

      }}

    >



      <h1

        style={{

          textAlign:"center",

          color:"#1b5e20"

        }}

      >

        🌿 مصنوعات کا انتظام

      </h1>




      <form

        onSubmit={addProduct}

        style={{

          maxWidth:"600px",

          margin:"30px auto",

          background:"white",

          padding:"30px",

          borderRadius:"20px",

          boxShadow:"0 8px 25px #ccc"

        }}

      >



        <input

          name="urduName"

          value={product.urduName}

          onChange={handleChange}

          placeholder="مصنوعات کا اردو نام"

          style={inputStyle}

        />



        <input

          name="englishName"

          value={product.englishName}

          onChange={handleChange}

          placeholder="English Name"

          dir="ltr"

          style={inputStyle}

        />



        <textarea

          name="description"

          value={product.description}

          onChange={handleChange}

          placeholder="تفصیل"

          style={inputStyle}

        />




        <input

          name="image"

          value={product.image}

          onChange={handleChange}

          placeholder="Image URL"

          dir="ltr"

          style={inputStyle}

        />




        <select

          name="weight"

          value={product.weight}

          onChange={handleChange}

          style={inputStyle}

        >

          <option>100 گرام</option>

          <option>250 گرام</option>

          <option>500 گرام</option>

          <option>1 کلو</option>

        </select>





        <input

          name="price"

          value={product.price}

          onChange={handleChange}

          placeholder="قیمت"

          style={inputStyle}

        />





        <button

          type="submit"

          style={buttonStyle}

        >

          + مصنوعات شامل کریں

        </button>




      </form>






      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",

          gap:"20px"

        }}

      >



        {

          products.map((p,index)=>(


            <div

              key={index}

              style={cardStyle}

            >



              {

                p.image &&

                <img

                  src={p.image}

                  alt={p.englishName}

                  style={{

                    width:"100%",

                    height:"150px",

                    objectFit:"cover",

                    borderRadius:"15px"

                  }}

                />

              }




              <h2>

                {p.urduName}

              </h2>



              <h3>

                {p.englishName}

              </h3>



              <p>

                {p.weight}

              </p>



              <p>

                قیمت: {p.price}

              </p>



            </div>


          ))

        }



      </div>



    </main>


  );

}




const inputStyle={

  width:"100%",

  padding:"12px",

  margin:"8px 0",

  borderRadius:"10px",

  border:"1px solid #ccc",

  fontSize:"16px",

  boxSizing:"border-box"

};



const buttonStyle={

  width:"100%",

  padding:"13px",

  marginTop:"15px",

  background:"#1b5e20",

  color:"white",

  border:"none",

  borderRadius:"25px",

  fontSize:"17px",

  cursor:"pointer"

};



const cardStyle={

  background:"white",

  padding:"20px",

  borderRadius:"20px",

  textAlign:"center",

  boxShadow:"0 5px 15px #ddd"

};
