import { useState } from 'react'
import FilterControls from './components/FilterControls'
import AddPost from './components/AddPost'
import PostsList from './components/PostsList'
import UpdateProfile from './components/UpdateProfile'
import { useAuth } from './store/AuthContext'

export default function App() {
  const { posts } = useAuth()
  const [filteredPosts, setFilteredPosts] = useState([])
  const [updateProfile, setUpdateProfile] = useState(false)

  return (
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
  )
}
