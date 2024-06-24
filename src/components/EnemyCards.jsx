import { handleChooseEnemyCards } from "../hooks/handleChooseEnemyCard"
import { handleShowHideCards } from "../hooks/handleShowHideCards"

export const EnemyRock = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyRock, chooseEnemyBtn } = handleChooseEnemyCards()

  const handleChooseCard = () => {
    if(chooseEnemyBtn === false) return
    chooseEnemyRock()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <>
      <div className="w-[100%] flex justify-between">
        <button onClick={handleChooseCard} id="enemyCard" className="mx-auto">Rock</button>
        {chooseEnemyBtn && (
          <button onClick={handleChoose}>Choose</button>
        )}
      </div>
    </>
  )
}

export const EnemyPapper = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyPapper, chooseEnemyBtn } = handleChooseEnemyCards()
  
  const handleChooseCard = () => {
    if(chooseEnemyBtn === false) return
    chooseEnemyPapper()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <div className="w-[100%] flex justify-between">
      <button onClick={handleChooseCard} id="enemyCard" className="mx-auto">Papper</button>
      {chooseEnemyBtn && (
        <button onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}

export const EnemyScissor = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyScissor, chooseEnemyBtn } = handleChooseEnemyCards()

  const handleChooseCard = () => {
    if(chooseEnemyBtn === false) return
    chooseEnemyScissor()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <div className="w-[100%] flex justify-between">
      <button onClick={handleChooseCard} id="enemyCard" className="mx-auto">Scissor</button>
      {chooseEnemyBtn && (
        <button onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}