import React from 'react'
import { Link } from 'react-router'

function Cart() {
    let products=[
        {id:1,name:'Product 1',price:10},
        {id:2,name:'Product 2',price:20},
        {id:3,name:'Product 3',price:30},
    ]
  return (
    <div>
      {
        products.map((product)=>{
            return <Link key={product.id} to={`/cart/${product.id}`}>{product.name}</Link>
        })} 
      
    </div>
  )
}

export default Cart
