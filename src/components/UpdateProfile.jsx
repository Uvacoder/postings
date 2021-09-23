import { useState } from 'react'
import { motion } from 'framer-motion'
import { db, storage } from '../app/firebase'
import { useStore } from '../app/store'
import { doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const UpdateProfile = ({ setUpdateProfile }) => {
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(false)

  const { user } = useStore()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setUploading(true)

      if (username.length === 0) {
        setError(true)
        return
      }

      if (avatar) {
        const storageRef = ref(storage, avatar?.name)

        await uploadBytes(storageRef, avatar)

        await updateDoc(doc(db, 'users', user?.uid), {
          username: username ? username : '',
          avatar: await getDownloadURL(storageRef)
        })

        setError(false)
      } else {
        await updateDoc(doc(db, 'users', user?.uid), {
          username: username
        })

        setError(false)
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <div className='update-header'>
        <h2>Update Profile</h2>
        <button className='btn link' onClick={() => setUpdateProfile(false)}>
          Back to Posts List
        </button>
      </div>

      <form className='update-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Update username</label>
        <input
          name='username'
          id='username'
          className={error ? 'error' : ''}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p className='error-red'>You must include a username</p>}
        <label htmlFor='avatar'>
          Change avatar (optional) (Note: We only accept jpg or png extensions)
        </label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          name='avatar'
          id='avatar'
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
    </motion.div>
  )
}

export default UpdateProfile
