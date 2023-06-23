import './Navbar.scss'
import logo from '../../assets/svg/logo.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [active, setActive] = useState('')

    const handleClick = () => {
        if (active === 'active') {
            setActive('')
        } else {
            setActive('active')
        }
    }

  return (
    <nav id='navbar' className='navbar'>
        <img src={logo} alt="logo" />
    
        <ul>
            <li>
                <NavLink className={active} onClick={handleClick} to={"/"}>Accueil</NavLink></li>
            <li><NavLink className={active} onClick={handleClick} to={"/about"}>A propos</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar