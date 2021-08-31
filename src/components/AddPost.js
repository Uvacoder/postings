import { useState } from 'react'
import { useAuth } from '../store/AuthContext'
import { db } from '../lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function AddPost({ setUpdateProfile }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [toggleForm, setToggleForm] = useState(false)
  const { user } = useAuth()

  const addPost = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        uid: user.uid,
        created_at: serverTimestamp()
      })
      setTitle('')
      setContent('')
      setToggleForm(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      {user && (
        <>
          <button className='btn' onClick={() => setToggleForm(!toggleForm)}>
            {toggleForm ? 'Hide Form' : 'Add Post'}
          </button>
          <button tabIndex={0} className='btn link right' onClick={() => setUpdateProfile(true)}>
            Update Profile
          </button>
        </>
      )}
      {!user && <h2>Sign in to start adding posts</h2>}
      {toggleForm && (
        <form onSubmit={addPost}>
          <label htmlFor='title'>Title</label>
          <input required name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor='content'>Content</label>
          <textarea
            required
            rows={10}
            name='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type='submit' className='btn'>
            Add Post
          </button>
        </form>
      )}
    </>
  )
}
