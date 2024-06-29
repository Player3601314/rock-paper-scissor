import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex'>
      <div className='w-[50%] m-auto h-[600px] max-lg:w-[100%] max-lg:h-[80%]'>
        <h1 className='text-[28px]'>Welcome</h1>
        <div className='flex justify-evenly'>
          <h1 className='text-[48px] text-red-500'>Rock</h1>
          <h1 className='text-[48px] text-yellow-500'>Paper</h1>
          <h1 className='text-[48px] text-blue-500'>Scissors</h1>
        </div>

        <div className='w-[50%] h-[50%] mx-auto flex flex-col justify-evenly'>
          <Link className='bg-red-500 text-[#fff] text-[20px] font-bold py-[8px] rounded-[8px]' to="/signplayer">Single Player</Link>
          <Link className='bg-yellow-500 text-[#fff] text-[20px] font-bold py-[8px] rounded-[8px]' to="/localplayer">Local Player</Link>
          <Link className='bg-blue-500 text-[#fff] text-[20px] font-bold py-[8px] rounded-[8px]' to="/multiplayer">Multi Player</Link>
        </div>

      </div>
    </div>
  )
}

export default HomePage