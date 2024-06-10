import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav>
        <h1 className="logo"> VVVISUAL </h1>
        <div className="menu" onClick={handleClick} aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={menuOpen ? 'open' : ''}
          onClick={handleClick}
          aria-hidden="true"
        >
          <li>
            <NavLink to={'/'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={'/pricing'}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
