import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FaCartArrowDown } from 'react-icons/fa'

const Navbar = () => {
  const [navbarStatus, setNavbarStatus] = useState({
    open: false,
    css: 'collapse navbar-collapse',
  })
  const [links, setLinks] = useState([
    { id: 1, path: '/', text: 'home' },
    { id: 2, path: '/about', text: 'about' },
  ])

  const navbarHandler = () => {
    navbarStatus.open
      ? setNavbarStatus({
          open: false,
          css: 'collapse navbar-collapse',
        })
      : setNavbarStatus({
          open: true,
          css: 'collapse navbar-collapse show',
        })

    console.log(navbarStatus)
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={navbarStatus.css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li className="nav-item" key={link.id}>
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
