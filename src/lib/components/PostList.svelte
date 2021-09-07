<script>
  import Post from '$lib/components/Post.svelte'
  import firebase from '$lib/stores/firebase'
  import { deleteDoc, doc } from '@firebase/firestore'

  export let filteredPosts

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc($firebase.db, 'posts', postId))
    } catch (error) {
      console.error(error.message)
    }
  }
</script>

<section>
  {#each filteredPosts as post}
    <Post {post} {deletePost} />
  {/each}
</section>
