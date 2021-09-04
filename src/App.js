import { useEffect, useState } from 'react'
import FilterControls from './components/FilterControls'
import AddPost from './components/AddPost'
import PostsList from './components/PostsList'
import UpdateProfile from './components/UpdateProfile'
import { useAuth } from './context/AuthContext'
import OfflineBanner from './components/OfflineBanner'
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
  serverTimestamp
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './lib/firebase'
import { useOffline } from './lib/hooks'

export default function App() {
  const { posts, setPosts, setUser } = useAuth()
  const [filteredPosts, setFilteredPosts] = useState([])
  const [updateProfile, setUpdateProfile] = useState(false)
  const isOffline = useOffline()

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

  return (
    <>
      <main id='main'>
        {updateProfile && <UpdateProfile setUpdateProfile={setUpdateProfile} />}
        {!updateProfile && (
          <>
            <AddPost setUpdateProfile={setUpdateProfile} />
            <FilterControls
              posts={posts}
              filteredPosts={filteredPosts}
              setFilteredPosts={setFilteredPosts}
            />
            <PostsList filteredPosts={filteredPosts} />
          </>
        )}
      </main>
      {isOffline && <OfflineBanner />}
    </>
  )
}
