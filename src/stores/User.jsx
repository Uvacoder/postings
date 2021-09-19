import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { signInWithRedirect, signOut, GoogleAuthProvider, onAuthStateChanged } from '@firebase/auth'
import {
  onSnapshot,
  doc,
  collection,
  where,
  query,
  setDoc,
  serverTimestamp
} from '@firebase/firestore'
import { auth, db } from '../utils/firebase'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const login = () => signInWithRedirect(auth, new GoogleAuthProvider())
  const logout = () => signOut(auth)

  useEffect(() => {
    setLoading(true)

    const unsubscribe = onAuthStateChanged(auth, async (session) => {
      try {
        if (session) {
          const document = await onSnapshot(doc(db, 'users', session?.uid), (snapshot) =>
            setUser(snapshot.data())
          )

          await onSnapshot(
            query(collection(db, 'posts'), where('uid', '==', session?.uid)),
            (snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          )

          if (!document) {
            await setDoc(doc(db, 'users', session?.uid), {
              uid: session?.uid,
              username: session?.displayName,
              email: session?.email,
              avatar: session?.photoURL,
              created_at: serverTimestamp()
            })
          }
        } else {
          setUser(null)
          setPosts([])
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, posts, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
