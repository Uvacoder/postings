import { writable } from 'svelte/store'

const auth = writable({ user: null, posts: [] })
const firebase = writable({ auth: null, db: null, storage: null })
const breakpoint = writable(0)
const offline = writable(false)

export { auth, firebase, breakpoint, offline }
