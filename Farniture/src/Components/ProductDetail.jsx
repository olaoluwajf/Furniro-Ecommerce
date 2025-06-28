import React from 'react'
import { Link } from 'react-router-dom'
import { FaEllipsisV, FaGreaterThan } from 'react-icons/fa'

const ProductDetail = (props) => {
  return (
    <div>
        <div className='flex flex-row p-3 gap-x-1 bg-amber-100' >
          <Link to='/Home' >Home</Link>
          <FaGreaterThan/>
          <Link to='/ShopHero'>Shop</Link>
          <FaGreaterThan/>
          <FaEllipsisV/>
          <span>{props.ProductName}</span>

        </div>
        <section>
          <div>
            <div>
              {props.Image1}
              {props.Image1}
              {props.Image1}

            </div>
            
            <div>
              {props.MainImage}
            </div>
          </div>

          <div>
            <h1>{props.ProductName}</h1>
            <h3>Rs.{props.price}</h3>
          </div>
        </section>
    </div>
  )
}

export default ProductDetail