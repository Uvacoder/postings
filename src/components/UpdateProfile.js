import { doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { db, storage } from '../lib/firebase'
import { useAuth } from '../store/AuthContext'

export default function UpdateProfile({ setUpdateProfile }) {
  const { user } = useAuth()
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setUploading(true)

      if (avatar) {
        const storageRef = ref(storage, avatar.name)
        await uploadBytes(storageRef, avatar)
        await updateDoc(doc(db, 'users', user.uid), {
          username: username ? username : '',
          avatar: await getDownloadURL(storageRef)
        })
      } else {
        await updateDoc(doc(db, 'users', user.uid), {
          username: username
        })
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <div className='update-header'>
        <h2>Update Profile</h2>
        <button className='btn link' onClick={() => setUpdateProfile(false)}>
          Back to Posts List
        </button>
      </div>
      <form className='update-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Update Username</label>
        <input name='username' onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor='avatar'>Update Avatar (We only accept jpg or png extensions)</label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          name='avatar'
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type='submit' className='btn'>
          {uploading ? (
            <div className='loading'>
              <span className='loader' />
              <p>Updating...</p>
            </div>
          ) : (
            'Update'
          )}
        </button>
      </form>
    </>
  )
}
