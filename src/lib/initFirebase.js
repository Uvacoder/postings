import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

export const initFirebase = () => {
  const firebase = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  })

  return {
    auth: getAuth(firebase),
    db: getFirestore(firebase),
    storage: getStorage(firebase)
  }
}