import { useState } from 'react'
import { useOffline } from './app/hooks'
import { useStore } from './app/store'
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'
import AddPost from './components/AddPost'
import PostList from './components/PostList'
import FilterControls from './components/FilterControls'
import UpdateProfile from './components/UpdateProfile'
import { useRegisterSW } from 'virtual:pwa-register/react'

const App = () => {
  const [filteredPosts, setFilteredPosts] = useState([])
  const [updateProfile, setUpdateProfile] = useState(false)
  const offline = useOffline()
  const { loading } = useStore()

  useRegisterSW({
    onRegisterError(error) {
      console.log(error)
    }
  })

  return (
    <>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>

      <Header />

      <main id='main'>
        {loading ? (
          <div style={{ minHeight: '30em' }} className='loading skeleton'>
            <span style={{ width: '6em', height: '6em' }} className='loader' />
          </div>
        ) : updateProfile ? (
          <UpdateProfile setUpdateProfile={setUpdateProfile} />
        ) : (
          <>
            <AddPost setUpdateProfile={setUpdateProfile} />
            <FilterControls filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />
            <PostList filteredPosts={filteredPosts} />
          </>
        )}
      </main>

      <Footer />

      {offline && <Banner />}
    </>
  )
}

export default App
