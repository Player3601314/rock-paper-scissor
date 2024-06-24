import { create } from 'zustand'

export const handleChooseMyCards = create((set) => ({
  chooseMyCard: 0,
  chooseMyBtn: null,
  chooseMyRock: () => set(() => ({ chooseMyCard: 1, chooseMyBtn: true })),
  chooseMyPapper: () => set(() => ({ chooseMyCard: 2, chooseMyBtn: true })),
  chooseMyScissor: () => set(() => ({ chooseMyCard: 3, chooseMyBtn: true })),
  hideMyBtn: () => set(() => ({ chooseMyBtn: false })),
  handleResetMyCard: () => set(() => ({ chooseMyCard: 0, chooseMyBtn: null }))
}))