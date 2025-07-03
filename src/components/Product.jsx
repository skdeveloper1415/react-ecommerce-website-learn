import React from 'react'
import FormatePrice from './FormatePrice'

const Product = ({id, name, image, price, category}) => {
    // const {id, name, image, price, category} = curElem;
  return (
    <div>
        <div className='bg-white px-5 pt-5 pb-2.5'> 
            <figure className='relative'>
                <img src={image} alt={name} />
                <figcaption className='caption absolute top-2 right-2 bg-white py-0.5 px-2 rounded-full shadow-2xl'>{category}</figcaption>
            </figure>
            <div className="card-data pt-2.5">
                <div className="flex items-center justify-between">
                    <h3>{name}</h3>
                    <FormatePrice price={price} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product