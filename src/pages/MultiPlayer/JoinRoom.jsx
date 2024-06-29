import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const JoinRoom = () => {

  const [inp, setInp] = useState("")

  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#031f35] text-[#fff] text-center flex'>
        <div className='w-[50%] h-[50%] max-lg:w-[80%] max-lg:h-auto m-auto flex justify-evenly'>
          <input
          onChange={(e) => {setInp(e.target.value)}}
          value={inp}
          className='w-[40%] max-lg:w-full h-auto my-auto ml-auto mr-[10px] py-[6px] px-[14px] bg-[rgba(3,31,53,0.6)] rounded-[6px] border-blue-800 border text-[#fff]' placeholder='Write your tokken key ...' type="text" />
          <Link
            to={`/multiplayer/room/${inp}`}
            className='w-[20%] px-[20px] py-[6px] rounded-[6px] h-auto my-auto ml-[10px] mr-auto bg-[rgba(3,31,53,0.6)] hover:bg-[rgba(3,31,53,0.8)] border-blue-800 border'>
            Search
          </Link>
        </div>
      </div>
    </>
  )
}

export default JoinRoom