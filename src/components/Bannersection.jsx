import React from 'react'
import imageOne from '../../public/img/imageone.jpg'

const Bannersection = (props) => {
  return (
    <section className='flex items-center justify-between px-14 py-8'>
        <div>
        <h1>Hello {props.name}</h1>
        <h2>Sub Taxt {props.page}</h2>
        </div>
        <img src={imageOne} alt="" width={500} />
    </section>
  )
}

export default Bannersection