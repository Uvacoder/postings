import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Post from './components/Post'

export default function App() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [query, setQuery] = useState('')
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    const existingPosts = localStorage.getItem('posts')
    setPosts(existingPosts ? JSON.parse(existingPosts) : [])
  }, [])

  useEffect(() => {
    if (query) {
      const regexp = new RegExp(query, 'gi')
      const filterPosts = posts.filter((post) => (post.title + post.content).match(regexp))
      setFilteredPosts(filterPosts)
    } else {
      setFilteredPosts(posts)
    }
  }, [query, posts])

  const addPost = (e) => {
    e.preventDefault()
    const newPostArray = [...posts, { id: uuidv4(), title, content }]
    setPosts(newPostArray)
    setTitle('')
    setContent('')
    localStorage.setItem('posts', JSON.stringify(newPostArray))
  }

  const deletePost = (postId) => {
    const filterPosts = posts.filter((post) => post.id !== postId)
    setPosts(filterPosts)
    localStorage.removeItem('posts')
  }

  return (
    <main>
      <h1>My Posts List</h1>
      <button className='btn' onClick={() => setToggleForm(!toggleForm)}>
        {toggleForm ? 'Hide' : 'Show'} Form
      </button>
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
      <aside>
        <label htmlFor='search'>Search</label>
        <input
          name='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '50%' }}
        />
      </aside>
      <section>
        {filteredPosts &&
          filteredPosts.map((post) => <Post post={post} deletePost={deletePost} key={post.id} />)}
      </section>
    </main>
  )
}
