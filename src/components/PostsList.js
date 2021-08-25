import Post from './Post'
import { db } from '../lib/firebase'

export default function PostsList({ filteredPosts, setPosts }) {
  const deletePost = async (postId) => {
    try {
      await db.collection('posts').doc(postId).delete()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <section>
      {filteredPosts &&
        filteredPosts.map((post) => <Post post={post} deletePost={deletePost} key={post.id} />)}
    </section>
  )
}
