import { handleChooseMyCards } from "../hooks/handleChooseMyCard"
import { handleShowHideCards } from "../hooks/handleShowHideCards"

import rockImg from "../assets/rock.png"
import papperImg from "../assets/papper.png"
import scissorImg from "../assets/scissor.png"

export const MyRock = () => {
  const { chooseMyRock, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if (chooseMyBtn === false) return
    chooseMyRock()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <>
      <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
        <img src={rockImg} id="myCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
        {chooseMyBtn && (
          <button className="my-[20px] bg-red-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
        )}
      </div>
    </>
  )
}

export const MyPapper = () => {
  const { chooseMyPapper, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if (chooseMyBtn === false) return
    chooseMyPapper()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
      <img src={papperImg} id="myCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
      {chooseMyBtn && (
        <button className="my-[20px] bg-blue-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}

export const MyScissor = () => {
  const { chooseMyScissor, chooseMyBtn } = handleChooseMyCards()
  const { handleHideMyCard } = handleShowHideCards()

  const handleChooseCard = () => {
    if (chooseMyBtn === false) return
    chooseMyScissor()
  }

  const handleChoose = () => {
    handleHideMyCard()
  }

  return (
    <div className="w-[100%] flex justify-evenly items-center flex-col m-auto">
      <img src={scissorImg} id="myCard" onClick={handleChooseCard} className="mx-auto cursor-pointer" />
      {chooseMyBtn && (
        <button className="my-[20px] bg-yellow-500 py-[6px] px-[14px] rounded-[6px]" onClick={handleChoose}>Choose</button>
      )}
    </div>
  )
}