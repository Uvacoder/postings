import { GoogleAuthProvider, signOut, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
  serverTimestamp
} from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../lib/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const document = await onSnapshot(doc(db, 'users', user.uid), (snapshot) =>
            setUser(snapshot.data())
          )
          await onSnapshot(
            query(collection(db, 'posts'), where('uid', '==', user.uid)),
            (snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          )
          if (!document) {
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              username: user.displayName,
              email: user.email,
              avatar: user.photoURL,
              created_at: serverTimestamp()
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
    signInWithRedirect(auth, new GoogleAuthProvider())
  }
  const logout = () => {
    signOut(auth)
    setUser(null)
    setPosts(null)
  }
  return (
    <AuthContext.Provider value={{ user, posts, setPosts, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
