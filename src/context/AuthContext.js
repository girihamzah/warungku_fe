import axios from "axios"
import { useLocalStorage } from "react-use"
import { useState, createContext, useContext, useEffect } from "react"

const AuthContext = createContext(null)

const Auth = ({ children }) => {

  const [dataUser, setDataUser] = useLocalStorage("user")
  const [token, setToken] = useLocalStorage("token")

  const state = {
  
    dataUser, setDataUser,
    token, setToken

  }

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be use within a Network Performance`)
  }
  return context  
}

export default Auth

