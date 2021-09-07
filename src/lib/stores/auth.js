import { writable } from 'svelte/store'

export default writable({ user: null, posts: [] })
