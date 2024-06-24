import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currElem) => {
  const {id, name, image, price, category} = currElem;
  return (
    <div>
      <NavLink to={`/singleproduct/${id}`}>
       <div className='card'>
        <figure>
          <img src={image} alt={name}/>
          <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className='card-data'>
          <div className='card-data-flex'>
            <h3>{name}</h3>
            <p className='card-data--price'>{price}</p>

          </div>
        </div>
       </div>
      </NavLink>
    </div>
  )
}

export default Product
