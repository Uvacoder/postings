import React, { useState } from 'react'
import useOffline from './hooks/useOffline'
import { useUser } from './stores/User'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import AddPost from './components/AddPost'
import UpdateProfile from './components/UpdateProfile'
import PostsList from './components/PostsList'
import FilterControls from './components/FilterControls'
import { useRegisterSW } from 'virtual:pwa-register/react'

const App = () => {
  const { loading } = useUser()
  const offline = useOffline()
  const [filteredPosts, setFilteredPosts] = useState([])
  const [updateProfile, setUpdateProfile] = useState(false)

  useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    }
  })

  return (
    <>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>

      <Header />

      {loading ? (
        <div className='app-loading'>
          <span className='loader app-loader'></span>
        </div>
      ) : (
        <main id='main'>
          {updateProfile ? (
            <UpdateProfile setUpdateProfile={setUpdateProfile} />
          ) : (
            <>
              <AddPost setUpdateProfile={setUpdateProfile} />
              <FilterControls filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />
              <PostsList filteredPosts={filteredPosts} />
            </>
          )}
        </main>
      )}

      <Footer />

      {offline && <Banner />}
    </>
  )
}

export default App
