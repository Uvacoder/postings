import React from 'react'
import { motion } from 'framer-motion'

const Post = ({ post, deletePost }) => {
  return (
    <motion.article initial={{ scale: 0.7 }} animate={{ scale: 1 }}>
      <strong>Post ID: {post?.id}</strong>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <button onClick={() => deletePost(post?.id)} className='btn danger'>
        Delete Post
      </button>
    </motion.article>
  )
}

export default Post
