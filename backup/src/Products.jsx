import React, { useState } from 'react'

const Products = () => {
    let[pName,setpName]=useState('Test')
    
  return (
    <div>
        <h2>Product Name:{pName}</h2>
        <img src="https://rukminim2.flixcart.com/image/416/416/j1dvte80/mobile/p/a/t/apple-iphone-5s-a1530-original-imae2fhpc35bftft.jpeg?q=70&crop=false"/>
        <img src="https://filpz.com/cdn/shop/products/IP5SSG_f8368de7-a4cb-4b67-a7f2-ec91f0821e7f_1_600x.jpg?v=1604725472"/>
    </div>
  )
}

export default Products