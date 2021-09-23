import { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '../app/firebase'
import { useStore } from '../app/store'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const AddPost = ({ setUpdateProfile }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [toggleForm, setToggleForm] = useState(false)
  const { user } = useStore()

  const addPost = async (e) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        uid: user?.uid,
        created_at: serverTimestamp()
      })
      setTitle('')
      setContent('')
      setToggleForm(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      {user ? (
        <>
          <button className='btn' onClick={() => setToggleForm(!toggleForm)}>
            {toggleForm ? 'Hide Form' : 'Add Post'}
          </button>
          <button tabIndex={0} className='btn link right' onClick={() => setUpdateProfile(true)}>
            Update Profile
          </button>
        </>
      ) : (
        <h2>Sign in to start adding posts</h2>
      )}

      {toggleForm && (
        <motion.form onSubmit={addPost} initial={{ y: -50 }} animate={{ y: 0 }}>
          <label htmlFor='title'>Title</label>
          <input
            required
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='content'>Content</label>
          <textarea
            required
            rows='10'
            name='content'
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type='submit' class='btn'>
            Add Post
          </button>
        </motion.form>
      )}
    </>
  )
}

export default AddPost
