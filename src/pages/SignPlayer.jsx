import React from 'react'
import { MyPapper, MyRock, MyScissor } from '../components/MyCards'
import { handleChooseMyCards } from '../hooks/handleChooseMyCard'
import { handleShowHideCards } from '../hooks/handleShowHideCards'
import { handleCalcScore } from '../hooks/handleCalcScore'
import { handleChooseEnemyCards } from '../hooks/handleChooseEnemyCard'
import ResetButton from '../components/ResetButton'

const SignPlayer = () => {
  const { showMyCards, showBoth } = handleShowHideCards()
  const { chooseMyCard, hideMyBtn } = handleChooseMyCards()
  const { myScore, enemyScore, handleCalcScoreFunk } = handleCalcScore()
  const { chooseEnemyCard } = handleChooseEnemyCards()
  const { chooseRandom } = handleChooseEnemyCards()

  const handleShowBoth = () => {
    chooseRandom()
    showBoth()
    hideMyBtn()
    handleCalcScoreFunk()
  }
  return (
    <>
      <div className='w-[100%] h-[60px] mx-auto bg-[#031F35] text-[#fff] flex justify-around'>
        <span className='m-auto'>My score: {myScore}</span>
        <span className='m-auto'>Enemy score: {enemyScore}</span>
      </div>
      <div className='w-[100%] h-screen mx-auto bg-[#031F35] text-[#fff] flex justify-around'>
        <div className='w-[50%] h-auto m-auto max-lg:w-[80%]'>
          <div className='flex justify-between text-center items-center'>
            {showMyCards && (
              <div className='w-[100%] flex justify-between items-center text-center'>
                {chooseMyCard === 0 && (
                  <>
                    <MyRock />
                    <MyPapper />
                    <MyScissor />
                  </>
                )}

                {chooseMyCard === 1 && <MyRock />}

                {chooseMyCard === 2 && <MyPapper />}

                {chooseMyCard === 3 && <MyScissor />}
              </div>
            )}

            {showMyCards !== true && (
              <button onClick={handleShowBoth} className='mx-auto bg-green-500 py-[6px] px-[14px] rounded-[6px]'>Show both</button>
            )}

            {chooseEnemyCard === 1 && <MyRock />}
            {chooseEnemyCard === 2 && <MyPapper />}
            {chooseEnemyCard === 3 && <MyScissor />}
          </div>
          {chooseEnemyCard !== 0 && chooseMyCard !== 0 && <ResetButton />}
        </div>
      </div>
    </>
  )
}

export default SignPlayer