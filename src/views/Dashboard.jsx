import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Post from '../components/Post'
import { getDocs } from '../lib/helpers'

export default function App() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [query, setQuery] = useState('')
  const [sortType, setSortType] = useState('title')
  const [toggleForm, setToggleForm] = useState(false)
  const [filterControls, setFilterControls] = useState(false)

  useEffect(() => {
    getDocs('hello')
  }, [])

  const regexp = new RegExp(query, 'gi')

  useEffect(() => {
    const existingPosts = localStorage.getItem('posts')
    setPosts(existingPosts ? JSON.parse(existingPosts) : [])
  }, [])

  // Runs a check to hide
  useEffect(() => {
    if (posts.length > 0) {
      setFilterControls(true)
    } else {
      setFilterControls(false)
    }
  }, [filterControls, posts])

  // Sort the array of posts by the value selected in the dropdown
  useEffect(() => {
    const sortPosts = (type) => {
      const types = {
        title: 'title',
        content: 'content'
      }
      const sortProp = types[type]
      const sorted = [...filteredPosts].sort((a, b) => {
        a = a[sortProp].match(regexp)
        b = b[sortProp].match(regexp)
        if (a < b) {
          return -1
        }
        if (a > b) {
          return 1
        }
        return 0
      })
      setFilteredPosts(sorted)
    }
    sortPosts(sortType)
  }, [sortType])

  // Filter the array of posts by regex case insensitive match via title & content
  useEffect(() => {
    if (query) {
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
    setControls(true)
    setTitle('')
    setContent('')
    setToggleForm(false)
    localStorage.setItem('posts', JSON.stringify(newPostArray))
  }

  const deletePost = (postId) => {
    const filterPosts = posts.filter((post) => post.id !== postId)
    setPosts(filterPosts)
    localStorage.removeItem('posts')
  }

  return (
    <>
      <button className='btn' onClick={() => setToggleForm(!toggleForm)}>
        {toggleForm ? 'Hide Form' : 'Add Post'}
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
      {filterControls && (
        <aside>
          <div className='field'>
            <label htmlFor='search'>Search</label>
            <input name='search' value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className='field'>
            <label htmlFor='sort'>Sort By</label>
            <select name='sort' value={sortType} onChange={(e) => setSortType(e.target.value)}>
              <option value='title'>title</option>
              <option value='content'>content</option>
            </select>
          </div>
        </aside>
      )}
      <section>
        {filteredPosts &&
          filteredPosts.map((post) => <Post post={post} deletePost={deletePost} key={post.id} />)}
      </section>
    </>
  )
}
