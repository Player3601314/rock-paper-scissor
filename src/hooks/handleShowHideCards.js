import { create } from 'zustand';

export const handleShowHideCards = create((set) => ({
  showMyCards: true,
  showEnemyCards: false,
  handleHideMyCard: () => set({ showMyCards: false, showEnemyCards: true }),
  handleShowMyCard: () => set({ showMyCards: true, showEnemyCards: false }),
  handleHideEnemyCard: () => set({ showMyCards: false, showEnemyCards: false }),
  handleShowEnemyCard: () => set({ showMyCards: false, showEnemyCards: true }),
  showBoth: () => set({ showMyCards: true, showEnemyCards: true})
}));