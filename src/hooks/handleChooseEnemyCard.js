import { create } from 'zustand'

export const handleChooseEnemyCards = create((set) => ({
  chooseEnemyCard: 0,
  chooseEnemyBtn: null,
  chooseEnemyRock: () => set(() => ({ chooseEnemyCard: 1, chooseEnemyBtn: true })),
  chooseEnemyPapper: () => set(() => ({ chooseEnemyCard: 2, chooseEnemyBtn: true })),
  chooseEnemyScissor: () => set(() => ({ chooseEnemyCard: 3, chooseEnemyBtn: true })),
  hideEnemyBtn: () => set(() => ({ chooseEnemyBtn: false })),
  chooseRandom: () => {
    const randomCard = Math.floor(Math.random() * 3) + 1
    set(() => ({ chooseEnemyCard: randomCard }))
  },
  handleResetEnemyCard: () => set(() => ({ chooseEnemyCard: 0, chooseEnemyBtn: null }))
}))