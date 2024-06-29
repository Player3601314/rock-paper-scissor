import { create } from 'zustand';
import { handleChooseMyCards } from './handleChooseMyCard';
import { handleChooseEnemyCards } from './handleChooseEnemyCard';

export const handleCalcScore = create((set) => ({
  myScore: 0,
  enemyScore: 0,
  handleCalcScoreFunk: () => {
    const chooseMyCard = handleChooseMyCards.getState().chooseMyCard;
    const chooseEnemyCard = handleChooseEnemyCards.getState().chooseEnemyCard;

    if (chooseMyCard === chooseEnemyCard) {
      return
    }
    else if (chooseMyCard === 1 && chooseEnemyCard === 3) {
      set((state) => ({
        myScore: state.myScore === null ? 1 : state.myScore + 1,
      }));
    }
    else if (chooseMyCard === 3 && chooseEnemyCard === 1) {
      set((state) => ({
        enemyScore: state.enemyScore === null ? 1 : state.enemyScore + 1,
      }));
    }
    else if (chooseMyCard < chooseEnemyCard) {
      set((state) => ({
        enemyScore: state.enemyScore === null ? 1 : state.enemyScore + 1,
      }));
    }
    else if (chooseMyCard > chooseEnemyCard) {
      set((state) => ({
        myScore: state.myScore === null ? 1 : state.myScore + 1,
      }));
    }
  },
}));
