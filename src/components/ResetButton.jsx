import React from 'react'
import { handleChooseMyCards } from '../hooks/handleChooseMyCard'
import { handleChooseEnemyCards } from '../hooks/handleChooseEnemyCard'

const ResetButton = () => {
  const { handleResetMyCard } = handleChooseMyCards()
  const { handleResetEnemyCard } = handleChooseEnemyCards()

  const handleReset = () => {
    handleResetMyCard()
    handleResetEnemyCard()
  }
  return (
    <div className='flex justify-around'>
      <button onClick={handleReset} className='bg-green-500 py-[6px] px-[14px] rounded-[6px]'>Reset</button>
    </div>
  )
}

export default ResetButton