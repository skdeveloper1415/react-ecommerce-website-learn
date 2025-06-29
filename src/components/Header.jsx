import { NavLink } from 'react-router'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section className='w-full bg-amber-100 h-2.5 flex items-center justify-between py-8 px-10'>
    <NavLink to="/" className={'nav-color'}>
     Shahrukh khan
    </NavLink>
    <Navbar />
    </section>
  )
}

export default Header