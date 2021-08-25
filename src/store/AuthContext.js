import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db, provider, timestamp } from '../lib/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const doc = await db
            .collection('users')
            .doc(user.uid)
            .onSnapshot((snapshot) => setUser(snapshot.data()))
          await db
            .collection('posts')
            .where('uid', '==', user.uid)
            .onSnapshot((snapshot) =>
              setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            )
          if (!doc.data()) {
            await db.collection('users').doc(user.uid).set({
              uid: user.uid,
              username: user.displayName,
              email: user.email,
              avatar: user.photoURL,
              created_at: timestamp
            })
          }
        }
      } catch (error) {
        console.error(error)
      }
    })
    return () => unsubscribe()
  }, [])

  const login = () => {
    auth.signInWithPopup(provider)
  }
  const logout = () => {
    auth.signOut()
    location.reload()
  }
  return (
    <AuthContext.Provider value={{ user, posts, setPosts, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
