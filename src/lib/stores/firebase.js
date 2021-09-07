import { writable } from 'svelte/store'

export default writable({ auth: null, db: null, storage: null })
