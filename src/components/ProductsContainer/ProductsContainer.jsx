import React from 'react'
import Product from '../Products/Product';

const ProductsContainer = () => {
  const product_container_style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '40px',
  }

  const avatars = [
    'https://galafruit.net/wp-content/uploads/galafruit_mele.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F04%2F11%2FGettyImages-180341886-2000.jpg&q=60',
    'https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg'
  ]

  return (
    <div style={product_container_style}>  
      <Product title="Apple" price="100" category="fruit" avatar={avatars[0]} />
      <Product title="Tomato" price="250" category="vegetable" avatar={avatars[1]} />
      <Product title="Banane" price="200" category="fruit" avatar={avatars[2]} />
    </div>
  )
}

export default ProductsContainer
