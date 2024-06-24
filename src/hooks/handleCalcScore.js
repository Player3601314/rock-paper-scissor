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
      console.log("equal cards");
      console.log(chooseMyCard, chooseEnemyCard);
    }
    else if (chooseMyCard === 1 && chooseEnemyCard === 3) {
      console.log("you win");
      set((state) => ({
        myScore: state.myScore === null ? 1 : state.myScore + 1,
      }));
      console.log(chooseMyCard, chooseEnemyCard);
    }
    else if (chooseMyCard === 3 && chooseEnemyCard === 1) {
      console.log("enemy win");
      set((state) => ({
        enemyScore: state.enemyScore === null ? 1 : state.enemyScore + 1,
      }));
      console.log(chooseMyCard, chooseEnemyCard);
    }
    else if (chooseMyCard < chooseEnemyCard) {
      console.log("enemy win");
      console.log(chooseMyCard, chooseEnemyCard);
      set((state) => ({
        enemyScore: state.enemyScore === null ? 1 : state.enemyScore + 1,
      }));
    }
    else if (chooseMyCard > chooseEnemyCard) {
      console.log("you win");
      console.log(chooseMyCard, chooseEnemyCard);
      set((state) => ({
        myScore: state.myScore === null ? 1 : state.myScore + 1,
      }));
    }
  },
}));
