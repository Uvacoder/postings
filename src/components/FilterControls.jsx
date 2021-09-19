import React, { useEffect, useState } from 'react'
import { useUser } from '../stores/User'

const FilterControls = ({ filteredPosts, setFilteredPosts }) => {
  const { posts } = useUser()
  const [sortType, setSortType] = useState('title')
  const [query, setQuery] = useState('')
  const [filterControls, setFilterControls] = useState(false)

  const regexp = new RegExp(query, 'gi')

  useEffect(() => {
    if (posts?.length > 0) {
      setFilterControls(true)
    } else {
      setFilterControls(false)
    }
  }, [posts])

  useEffect(() => {
    if (query) {
      const filterPosts = posts?.filter((post) => (post?.title + post?.content).match(regexp))
      setFilteredPosts(filterPosts)
    } else {
      setFilteredPosts(posts)
    }
  }, [query, posts])

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

  return (
    <>
      {filterControls && (
        <aside>
          <div className='field'>
            <label htmlFor='search'>Search</label>
            <input
              name='search'
              id='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='field'>
            <label htmlFor='sort'>Sort By</label>
            <select
              name='sort'
              id='sort'
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value='title'>title</option>
              <option value='content'>content</option>
            </select>
          </div>
        </aside>
      )}
    </>
  )
}

export default FilterControls
