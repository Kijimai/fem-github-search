import React, { useState } from "react"
import { useGlobalContext } from "../utils/context"
import { SunIcon, MoonIcon } from "./icons/Icons"

const Navbar = () => {
  const { toggleTheme, theme } = useGlobalContext()
  return (
    <nav>
      <div className="navbar">
        <a className="navbar__site-name" href="#">
          devfinder
        </a>
        <button onClick={toggleTheme} className="navbar__toggle">
          {theme === "light-theme" ? "Dark" : "Light"}
          {theme === "light-theme" ? (
            <MoonIcon color={`hsl(var(--toggle-btn))`} />
          ) : (
            <SunIcon color={`hsl(var(--toggle-btn))`} />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
