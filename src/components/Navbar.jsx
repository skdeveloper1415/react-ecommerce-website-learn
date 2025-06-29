import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { CgMenu, CgClose  } from "react-icons/cg";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <>
    <section className={menuIcon ? "navbar_active flex flex-col items-center justify-center" : "navbar flex items-center gap-4" }>
    <nav className={menuIcon ? "flex-col items-center justify-center gap-9 max-md:flex" : "flex items-center gap-9 max-md:hidden" }>
      <ul>
        <li className={menuIcon ? "flex flex-col items-center justify-center gap-3.5 text-2xl" : "flex items-center gap-5 text-base" }>
          <Link to={"/"} className='nav-color' onClick={() => setMenuIcon(false)}>Home</Link>
          <Link to={"/about"} className='nav-color' onClick={() => setMenuIcon(false)}>About us</Link>
          <Link to={"/product"} className='nav-color' onClick={() => setMenuIcon(false)}>Products</Link>
          <Link to={"/conatct"} className='nav-color' onClick={() => setMenuIcon(false)}>Contact</Link>
        </li>
      </ul>
      <Link to={"/"} className='inline-block'><span className='bg-amber-600 text-white px-2 py-1.5 text-xs rounded-md'>Login</span></Link>
      <Link to={"/"} className='relative inline-block'>
      <CiShoppingCart className='text-2xl nav-color transition delay-150 duration-300 ease-in-out hover:text-amber-950 hover:scale-110' /><span className='cart-total-item absolute -top-1.5 bg-amber-500 rounded-full w-4 h-4 text-white text-[10px]'>10</span></Link>      
    </nav>
    {/*Mobile Navbar BUtton*/}
      <div className="mobile-navbar md:hidden">
        <CgMenu name='mene-outline' className='mobile-nav-icon' onClick={() => setMenuIcon(true)} />
        <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={() => setMenuIcon(false)} />
      </div>
    </section>
    </>
  )
}

export default Navbar