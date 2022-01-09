import React, { useState } from "react"
import { useGlobalContext } from "../utils/context"
import { SunIcon } from "./icons/Icons"

const Navbar = () => {
  const { toggleTheme } = useGlobalContext()
  return (
    <nav>
      <div className="navbar">
        <a className="navbar__site-name" href="#">
          devfinder
        </a>
        <button onClick={toggleTheme} className="navbar__toggle">
          Light
          <SunIcon color={`hsl(var(--toggle-btn))`} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
