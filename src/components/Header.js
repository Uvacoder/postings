import { useAuth } from '../store/AuthContext'
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'
import { useScreenSize } from '../lib/hooks'

export default function Header() {
  const { user, login, logout } = useAuth()
  const screenSize = useScreenSize()

  return (
    <header>
      <h1> 🐉 My Posts List</h1>
      {!user && (
        <button className='btn secondary' onClick={login}>
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
          <button className='btn danger' onClick={logout}>
            {screenSize <= 548 ? <FaSignOutAlt /> : 'Sign Out'}
          </button>
        </div>
      )}
    </header>
  )
}
