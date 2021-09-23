import Post from './Post'
import { db } from '../app/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const PostList = ({ filteredPosts }) => {
  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id))
    } catch (err) {
      console.error(err.message)
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

export default PostList
