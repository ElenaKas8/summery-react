import React from 'react';

function Product({ title, price, category,avatar }) {

  const product_style = {
    gap: '10px',
    display: 'grid',
      borderRadius: '10px',
      padding: '10px',
      justifyContent: 'center',
      border: price > 100 ? '1px solid red' : '1px solid green'
    
  }
  const avatar_style = {
    width:'150px',
    height: '150px',
    objectFit: 'cover'
  }
  return (

    <div style={product_style}>
      <img src={avatar} alt="avatar" style={avatar_style} />
      <p>Title: {title}</p>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default Product;
