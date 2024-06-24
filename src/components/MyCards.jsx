import { handleChooseMyCards } from "../hooks/handleChooseMyCard"
import { handleShowHideCards } from "../hooks/handleShowHideCards"

export const MyRock = () => {
  const { chooseMyRock, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if(chooseMyBtn === false) return
    chooseMyRock()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <>
      <div className="w-[100%] flex justify-between">
        <button id="myCard" onClick={handleChooseCard} className="mx-auto">Rock</button>
        {chooseMyBtn && (
          <button onClick={handleChoose}>Choose</button>
        )}
      </div>
    </>
  )
}

export const MyPapper = () => {
  const { chooseMyPapper, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if(chooseMyBtn === false) return
    chooseMyPapper()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <div className="w-[100%] flex justify-between">
      <button id="myCard" onClick={handleChooseCard} className="mx-auto">Papper</button>
      {chooseMyBtn && (
        <button onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}

export const MyScissor = () => {
  const { chooseMyScissor, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if(chooseMyBtn === false) return
    chooseMyScissor()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <div className="w-[100%] flex justify-between">
      <button id="myCard" onClick={handleChooseCard} className="mx-auto">Scissor</button>
      {chooseMyBtn && (
        <button onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}