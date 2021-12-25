import React, { useState } from "react"
import { SunIcon } from "./icons/Icons"

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  

  return (
    <nav>
      <div className="navbar">
        <a className="navbar__site-name" href="#">
          devfinder
        </a>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="navbar__toggle"
        >
          Light
          <SunIcon color={`${isHovered ? "#90A4D4" : "#FFF"}`} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
