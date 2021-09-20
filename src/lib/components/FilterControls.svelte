<script>
  import { auth } from '$lib/stores'

  export let filteredPosts

  let sortType = 'title'
  let query = ''
  let filterControls = false

  $: regexp = new RegExp(query, 'gi')

  $: if ($auth.posts?.length > 0) {
    filterControls = true
  } else {
    filterControls = false
  }

  $: if (query) {
    const filterPosts = $auth.posts.filter((post) => (post.title + post.content).match(regexp))
    console.log(filterPosts)
    filteredPosts = filterPosts
  } else {
    filteredPosts = $auth.posts
  }

  const sortPosts = (type) => {
    const types = {
      title: 'title',
      content: 'content'
    }
    const sortProp = types[type]
    const sorted = [...filteredPosts].sort((a, b) => {
      a = a[sortProp].match(regexp)
      b = b[sortProp].match(regexp)
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    })
    filteredPosts = sorted
  }

  $: sortPosts(sortType)
</script>

{#if filterControls}
  <aside>
    <div class="field">
      <label for="search">Search</label>
      <input name="search" id="search" bind:value={query} />
    </div>
    <div class="field">
      <label for="sort">Sort By</label>
      <select name="sort" id="sort" bind:value={sortType}>
        <option value="title">title</option>
        <option value="content">content</option>
      </select>
    </div>
  </aside>
{/if}
