import Post from './Post'
import { db } from '../lib/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

export default function PostsList({ filteredPosts }) {
  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, 'posts', postId))
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
