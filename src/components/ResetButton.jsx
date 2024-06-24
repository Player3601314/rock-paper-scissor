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
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default ResetButton