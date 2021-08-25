export default function Posts({ post, deletePost }) {
  return (
    <article>
      <strong>Post ID: {post.id}</strong>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => deletePost(post.id)} className='btn danger'>
        Delete Post
      </button>
    </article>
  )
}
