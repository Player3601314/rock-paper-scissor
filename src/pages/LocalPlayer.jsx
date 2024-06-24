import React from 'react'
import { MyPapper, MyRock, MyScissor } from '../components/MyCards'
import { handleChooseMyCards } from '../hooks/handleChooseMyCard'
import { handleShowHideCards } from '../hooks/handleShowHideCards'
import { handleChooseEnemyCards } from '../hooks/handleChooseEnemyCard'
import { EnemyPapper, EnemyRock, EnemyScissor } from '../components/EnemyCards'
import { handleCalcScore } from '../hooks/handleCalcScore'

const LocalPlayer = () => {

  const { chooseMyCard, hideMyBtn } = handleChooseMyCards()
  const { chooseEnemyCard, hideEnemyBtn } = handleChooseEnemyCards()
  const { showMyCards, showEnemyCards, showBoth } = handleShowHideCards()
  const { myScore, enemyScore, handleCalcScoreFunk } = handleCalcScore()

  const handleShowBoth = () => {
    hideMyBtn()
    showBoth()
    hideEnemyBtn()
    handleCalcScoreFunk()
  }

  return (
    <>
      <div className='w-[100%] h-[60px] mx-auto bg-[#031F35] text-[#fff] flex justify-around'>
        <span className='m-auto'>Player 1:{" "} {myScore}</span>
        <span className='m-auto'>Player 2:{" "} {enemyScore}</span>
      </div>
      <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex'>
        <div className='w-[50%] h-[50%] m-auto bg-[#333] flex justify-between text-center'>
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

          {showEnemyCards && (

            <div className='w-[100%] flex justify-between items-center text-center'>
              {chooseEnemyCard === 0 && (
                <>
                  <EnemyRock />
                  <EnemyPapper />
                  <EnemyScissor />
                </>
              )}

              {chooseEnemyCard === 1 && <EnemyRock />}

              {chooseEnemyCard === 2 && <EnemyPapper />}

              {chooseEnemyCard === 3 && <EnemyScissor />}
            </div>
          )}
          {showMyCards !== true && showEnemyCards !== true && (
            <button onClick={handleShowBoth} className='mx-auto'>Show both</button>
          )}
        </div>
      </div>
    </>

  )
}

export default LocalPlayer