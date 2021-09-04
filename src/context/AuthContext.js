import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)

  const value = {
    user,
    setUser,
    posts,
    setPosts
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
