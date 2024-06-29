import { handleChooseEnemyCards } from "../hooks/handleChooseEnemyCard"
import { handleShowHideCards } from "../hooks/handleShowHideCards"

import rockImg from "../assets/rock.png"
import papperImg from "../assets/papper.png"
import scissorImg from "../assets/scissor.png"

export const EnemyRock = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyRock, chooseEnemyBtn } = handleChooseEnemyCards()

  const handleChooseCard = () => {
    if (chooseEnemyBtn === false) return
    chooseEnemyRock()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <>
      <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
        <img src={rockImg} id="enemyCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
        {chooseEnemyBtn && (
          <button className="my-[20px] bg-red-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
        )}
      </div>
    </>
  )
}

export const EnemyPapper = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyPapper, chooseEnemyBtn } = handleChooseEnemyCards()

  const handleChooseCard = () => {
    if (chooseEnemyBtn === false) return
    chooseEnemyPapper()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
      <img src={papperImg} id="enemyCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
      {chooseEnemyBtn && (
        <button className="my-[20px] bg-blue-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}

export const EnemyScissor = () => {
  const { handleHideEnemyCard } = handleShowHideCards()
  const { chooseEnemyScissor, chooseEnemyBtn } = handleChooseEnemyCards()

  const handleChooseCard = () => {
    if (chooseEnemyBtn === false) return
    chooseEnemyScissor()
  }

  const handleChoose = () => {
    handleHideEnemyCard()
  }

  return (
    <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
      <img src={scissorImg} id="enemyCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
      {chooseEnemyBtn && (
        <button className="my-[20px] bg-yellow-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}