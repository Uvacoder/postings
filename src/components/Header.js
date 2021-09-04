import { useAuth } from '../context/AuthContext'
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import { useScreenSize } from '../lib/hooks'
import { auth } from '../lib/firebase'
import { signInWithRedirect, GoogleAuthProvider, signOut } from 'firebase/auth'

export default function Header() {
  const { user, setUser, setPosts } = useAuth()
  const screenSize = useScreenSize()

  return (
    <header>
      <h1> 🐉 My Posts List</h1>
      {!user && (
        <button
          className='btn secondary'
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          {screenSize <= 548 ? <FaSignInAlt /> : 'Sign In With Google'}
        </button>
      )}
      {user && (
        <div className='user-bar'>
          <figure className='user-info'>
            {screenSize >= 548 && (
              <>
                <figcaption>{user.username}</figcaption>
                <img src={user.avatar} alt={`Profile of ${user.username}`} />
              </>
            )}
          </figure>
          <button
            className='btn danger'
            onClick={() => {
              signOut(auth)
              setUser(null)
              setPosts(null)
            }}
          >
            {screenSize <= 548 ? <FaSignOutAlt /> : 'Sign Out'}
          </button>
        </div>
      )}
    </header>
  )
}
