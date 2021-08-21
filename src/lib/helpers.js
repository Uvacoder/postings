import { db } from './firebase'
import { doc, addDoc, collection, serverTimestamp } from 'firebase/firestore'

export const getDocs = async (string) => {
  await addDoc(collection(db, 'users'), {
    name: string,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp()
  })
}
