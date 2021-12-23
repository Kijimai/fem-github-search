import React from "react"
import { sun, moon } from "../assets/assets"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <a className="navbar__site-name" href="#">
          devfinder
        </a>
        <button className="navbar__toggle">
          Light
          <img src={sun} alt="light toggle" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
