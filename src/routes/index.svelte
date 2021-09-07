<script>
  import { onMount } from 'svelte'
  import {
    collection,
    doc,
    onSnapshot,
    query,
    setDoc,
    where,
    serverTimestamp
  } from '@firebase/firestore'
  import { onAuthStateChanged } from '@firebase/auth'
  import firebase from '$lib/stores/firebase'
  import auth from '$lib/stores/auth'
  import offline from '$lib/stores/offline'
  import OfflineBanner from '$lib/components/OfflineBanner.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
  import AddPost from '$lib/components/AddPost.svelte'
  import FilterControls from '$lib/components/FilterControls.svelte'
  import PostList from '$lib/components/PostList.svelte'
  import UpdateProfile from '$lib/components/UpdateProfile.svelte'

  let updateProfile = false
  let filteredPosts = []

  onMount(() => {
    const unsubscribe = onAuthStateChanged($firebase.auth, async (user) => {
      try {
        if (user) {
          const document = await onSnapshot(
            doc($firebase.db, 'users', user.uid),
            (snapshot) => ($auth.user = snapshot.data())
          )
          await onSnapshot(
            query(collection($firebase.db, 'posts'), where('uid', '==', user.uid)),
            (snapshot) =>
              ($auth.posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          )
          if (!document) {
            await setDoc(doc($firebase.db, 'users', user.uid), {
              uid: user.uid,
              username: user.displayName,
              email: user.email,
              avatar: user.photoURL,
              created_at: serverTimestamp()
            })
          }
        } else {
          $auth.user = null
          $auth.posts = []
        }
      } catch (error) {
        console.error(error)
      }
    })

    return () => unsubscribe()
  })
</script>

<a class="skip-link" href="#main">Skip to content</a>

<Header />

<main id="main">
  {#if updateProfile}
    <UpdateProfile bind:updateProfile />
  {:else}
    <AddPost bind:updateProfile />
    <FilterControls bind:filteredPosts />
    <PostList bind:filteredPosts />
  {/if}
</main>

<Footer />

{#if $offline}
  <OfflineBanner />
{/if}
