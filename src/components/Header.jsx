import React from 'react'
import { useUser } from '../stores/User'
import useScreenSize from '../hooks/useScreenSize'
import { IoLogOut } from 'react-icons/io5'
import { IoLogIn } from 'react-icons/io5'

const Header = () => {
  const { user, login, logout } = useUser()
  const screenSize = useScreenSize()

  return (
    <header>
      <h1>🐉 My Posts List</h1>

      {!user ? (
        <button className='btn secondary' onClick={login}>
          {screenSize < 548 ? <IoLogIn aria-label='Sign In With Google' /> : 'Sign In With Google'}
        </button>
      ) : (
        <div className='user-bar'>
          <figure className='user-info'>
            {screenSize > 548 && (
              <>
                <figcaption>{user?.username}</figcaption>
                <img src={user?.avatar} alt={`Profile of ${user?.username}`} />
              </>
            )}
          </figure>
          <button className='btn danger' onClick={logout}>
            {screenSize < 548 ? <IoLogOut aria-label='Sign Out' /> : 'Sign Out'}
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
