import { collection, onSnapshot } from 'firebase/firestore'
import { create } from 'zustand'
import { firestore } from '../firebase/firebase'

export const getData = create((set) => ({
  dataMap: [],
  getSnapData: () => {
    const roomCollection = collection(firestore, "room")
    onSnapshot(roomCollection, (snapshot) => {
      let data = []
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      set({ dataMap: data })
    },
      (error) => {
        console.error("Error fetching snapshot:", error)
      })
  },
}))
