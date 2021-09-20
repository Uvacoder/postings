<script>
  import { auth, firebase, breakpoint } from '$lib/stores'
  import Login from 'carbon-icons-svelte/lib/Login16'
  import Logout from 'carbon-icons-svelte/lib/Logout16'
  import { signInWithRedirect, GoogleAuthProvider, signOut } from '@firebase/auth'
</script>

<header>
  <h1>🐉 My Posts List</h1>

  {#if !$auth.user}
    <button
      class="btn secondary"
      on:click={() => signInWithRedirect($firebase.auth, new GoogleAuthProvider())}
    >
      {#if $breakpoint < 548}
        <Login aria-label="Sign In With Google" />
      {:else}
        Sign In With Google
      {/if}
    </button>
  {:else}
    <div class="user-bar">
      <figure class="user-info">
        {#if $breakpoint > 548}
          <figcaption>{$auth.user.username}</figcaption>
          <img src={$auth.user.avatar} alt={`Profile of ${$auth.user.username}`} />
        {/if}
      </figure>
      <button class="btn danger" on:click={() => signOut($firebase.auth)}>
        {#if $breakpoint < 548}
          <Logout aria-label="Sign Out" />
        {:else}
          Sign Out
        {/if}
      </button>
    </div>
  {/if}
</header>
