import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCTtix_nug-N7Jf7bJ-yIpIsltW7tZh_GA',
  authDomain: 'mypostslist.firebaseapp.com',
  projectId: 'mypostslist',
  storageBucket: 'mypostslist.appspot.com',
  messagingSenderId: '208726028413',
  appId: '1:208726028413:web:3f74104a95e90a810ac114'
})

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
