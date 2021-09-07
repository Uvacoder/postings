<script>
  import { slide } from 'svelte/transition'
  import auth from '$lib/stores/auth'
  import firebase from '$lib/stores/firebase'
  import { addDoc, collection, serverTimestamp } from '@firebase/firestore'

  export let updateProfile

  let title = ''
  let content = ''
  let toggleForm = false

  const addPost = async () => {
    try {
      await addDoc(collection($firebase.db, 'posts'), {
        title,
        content,
        uid: $auth.user.uid,
        created_at: serverTimestamp()
      })
      title = ''
      content = ''
      toggleForm = false
    } catch (error) {
      console.error(error.message)
    }
  }
</script>

{#if $auth.user}
  <button class="btn" on:click={() => (toggleForm = !toggleForm)}>
    {toggleForm ? 'Hide Form' : 'Add Post'}
  </button>
  <button tabindex="0" class="btn link right" on:click={() => (updateProfile = true)}>
    Update Profile
  </button>
{:else}
  <h2>Sign in to start adding posts</h2>
{/if}

{#if toggleForm}
  <form on:submit|preventDefault={addPost} transition:slide>
    <label for="title">Title</label>
    <input required name="title" id="title" bind:value={title} />
    <label for="content">Content</label>
    <textarea required rows="10" name="content" id="content" bind:value={content} />
    <button type="submit" class="btn">Add Post</button>
  </form>
{/if}
