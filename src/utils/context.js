import React, { useState, useContext, useEffect } from "react"
import axios from "axios"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {

  })

  const searchGithubUser = async(user) => {
    
  }

  return <AppContext.Provider value={{currentUser}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }
