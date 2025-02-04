import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to={`/products/${product.id}`} class="btn btn-primary">View More Details</Link>
      </div>
    </div>
    </div>
  )
}

export default Card