import React from 'react'
import './Product.css'
const Product = (props) => {
    const{img, name,price,seller,quantity}=props.product;

  return (
    <div  className='product'>
        <img src={img} alt="product" />
        <h1>Name:{name}</h1>
    </div>
  )
}

export default Product