import React from 'react'
import Post from './Post'
import { db } from '../utils/firebase'
import { deleteDoc, doc } from '@firebase/firestore'

const PostsList = ({ filteredPosts }) => {
  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id))
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <section>
      {filteredPosts.map((post) => (
        <Post key={post?.id} post={post} deletePost={deletePost} />
      ))}
    </section>
  )
}

export default PostsList
