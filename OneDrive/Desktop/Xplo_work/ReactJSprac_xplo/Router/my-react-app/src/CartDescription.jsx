import React from 'react'
import { useParams } from 'react-router'

function CartDescription() {
    const { id } = useParams()
        let products=[
        {id:1,name:'Product 1',price:10},
        {id:2,name:'Product 2',price:20},
        {id:3,name:'Product 3',price:30},
    ]
  return (
    <div>
      {products.filter((product)=>{
        return product.id==id
      }).map((product)=>{
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CartDescription
