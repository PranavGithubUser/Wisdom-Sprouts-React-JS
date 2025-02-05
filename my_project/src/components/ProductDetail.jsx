import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = ({products}) => {
    const {id} = useParams();
    console.log(id)
    const [prod, setPro] = useState([]) 
    useEffect(()=>{
        setPro(()=>products.filter((elemt)=> id == elemt.id))
        console.log(prod);
    },[])

  return (
    <div className='bg-secondary'>
        Product Details

{prod.length >0   ?   <h1>{prod[0].name}</h1>  : <h2>Details are not avaialable</h2>}

    </div>
  )
}

export default ProductDetail