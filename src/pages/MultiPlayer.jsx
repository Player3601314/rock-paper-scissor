import React from 'react'

const MultiPlayer = () => {
  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex'>
        <div className='w-[50%] h-[50%] bg-[#333] m-auto flex flex-col justify-evenly'>
          <div>
            <h2 className='text-[38px] font-bold'>Create or Join room</h2>
          </div>
          <div className='w-[40%] py-[4px] rounded-[6px] mx-auto bg-red-500 text-[#fff] font-bold'>Create</div>
          <div className='w-[40%] py-[4px] rounded-[6px] mx-auto bg-blue-500 text-[#fff] font-bold'>Join</div>
        </div>
      </div>
    </>
  )
}

export default MultiPlayer