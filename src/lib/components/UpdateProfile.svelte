<script>
  import { fly } from 'svelte/transition'
  import { auth, firebase } from '$lib/stores'
  import { doc, updateDoc } from '@firebase/firestore'
  import { getDownloadURL, ref, uploadBytes } from '@firebase/storage'

  export let updateProfile

  let username = ''
  let avatar = null
  let uploading = false
  let error = false

  const handleSubmit = async () => {
    try {
      uploading = true

      if (username.length === 0) {
        error = true
        return
      }

      if (avatar) {
        const storageRef = ref($firebase.storage, avatar[0].name)
        await uploadBytes(storageRef, avatar[0])
        await updateDoc(doc($firebase.db, 'users', $auth.user.uid), {
          username: username ? username : '',
          avatar: await getDownloadURL(storageRef)
        })
        error = false
      } else {
        await updateDoc(doc($firebase.db, 'users', $auth.user.uid), {
          username: username
        })
        error = false
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      uploading = false
    }
  }
</script>

<div in:fly={{ x: -100 }}>
  <div class="update-header">
    <h2>Update Profile</h2>
    <button class="btn link" on:click={() => (updateProfile = false)}>Back to Posts List</button>
  </div>
  <form class="update-form" on:submit|preventDefault={handleSubmit}>
    <label for="username">Update username</label>
    <input name="username" id="username" bind:value={username} class:error />
    {#if error}
      <p class="error-red">You must include a username</p>
    {/if}
    <label for="avatar">Change avatar (optional) (Note: We only accept jpg or png extensions)</label
    >
    <input
      type="file"
      accept="image/png, image/jpeg"
      name="avatar"
      id="avatar"
      bind:files={avatar}
    />
    <button type="submit" class="btn">
      {#if uploading}
        <div class="loading">
          <span class="loader" />
          <p>Updating...</p>
        </div>
      {:else}
        Update
      {/if}
    </button>
  </form>
</div>
