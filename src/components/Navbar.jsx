import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='flex items-center gap-9'>
      <ul>
        <li className='flex items-center gap-5 text-base'>
          <Link to={"/"} className='nav-color'>Home</Link>
          <Link to={"/"} className='nav-color'>About us</Link>
          <Link to={"/"} className='nav-color'>Products</Link>
          <Link to={"/"} className='nav-color'>Contact</Link>
        </li>
      </ul>
      <Link to={"/"} className='relative'>
      <CiShoppingCart className='text-2xl nav-color transition delay-150 duration-300 ease-in-out hover:text-amber-950 hover:scale-110' /><span className='cart-total-item absolute -top-1.5 bg-amber-500 rounded-full w-4 h-4 text-white text-[10px]'>10</span></Link>
    </nav>
  )
}

export default Navbar