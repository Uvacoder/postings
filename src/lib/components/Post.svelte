<script>
  import { scale } from 'svelte/transition'

  export let post
  export let deletePost
</script>

<article in:scale>
  <strong>Post ID: {post.id}</strong>
  <h2>{post.title}</h2>
  <p>{post.content}</p>
  <button on:click={() => deletePost(post.id)} class="btn danger"> Delete Post </button>
</article>
