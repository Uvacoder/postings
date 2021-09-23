import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {
  onSnapshot,
  doc,
  query,
  collection,
  where,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'

const Store = createContext()

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const unsubscribe = onAuthStateChanged(auth, async (details) => {
      try {
        if (details) {
          const document = await onSnapshot(doc(db, 'users', details?.uid), (snapshot) =>
            setUser(snapshot.data())
          )

          await onSnapshot(
            query(collection(db, 'posts'), where('uid', '==', details?.uid)),
            (snapshot) =>
              setPosts(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
                }))
              )
          )

          if (!document) {
            await setDoc(doc(db, 'users', details?.uid), {
              uid: details?.uid,
              username: details?.displayName,
              email: details?.email,
              avatar: details?.photoURL,
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

  return <Store.Provider value={{ user, posts, loading }}>{children}</Store.Provider>
}

export const useStore = () => useContext(Store)
