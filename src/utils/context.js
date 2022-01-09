import React, { useState, useContext, useEffect } from "react"
import axios from "axios"

const AppContext = React.createContext()

// Check user's local storage to see what theme they prefer on startup
const getLocalTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [theme, setTheme] = useState(getLocalTheme())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const searchGithubUser = async (user) => {}

  const toggleTheme = () =>
    setTheme((previousTheme) => {
      if (previousTheme === "light-theme") {
        setTheme("dark-theme")
      } else {
        setTheme("light-theme")
      }
    })

  return (
    <AppContext.Provider value={{ currentUser, toggleTheme, theme }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }
