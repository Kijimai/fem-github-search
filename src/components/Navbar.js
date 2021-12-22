import React from "react"
import toggle from "../assets/icon-sun.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <a className="navbar__site-name" href="#">
          devfinder
        </a>
        <button className="navbar__toggle">
          Light
          <img src={toggle} alt="light toggle" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
