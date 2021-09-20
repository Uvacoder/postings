import { writable } from 'svelte/store'

export const auth = writable({ user: null, posts: [] })

export const firebase = writable({ auth: null, db: null, storage: null })

export const breakpoint = writable(0)

export const offline = writable(false)
