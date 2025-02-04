import React from 'react'
import Card from './Card'

const ProductsList = ({products}) => {
  return (
    <div className='container '>
      Product List
      <div className='row'>
      {products.map((elemt, index)=>(
        <div key={index} class="col-sm-6">
            <Card product={elemt} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProductsList;