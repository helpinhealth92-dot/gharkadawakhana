"use client";

export default function ProductCard({product}){

return (

<div>

<img
src={product.image}
alt={product.name}
width="200"
/>

<h2>
{product.name}
</h2>

<p>
{product.description}
</p>

<p>
Price: {product.price}
</p>

<button>
Add to Cart
</button>

</div>

);

}
