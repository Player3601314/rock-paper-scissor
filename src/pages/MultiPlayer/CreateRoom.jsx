import React, { useRef, useState } from 'react'
import { firestore } from '../../firebase/firebase';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const inputRef = useRef();
  const [createing, setCreating] = useState(true)
  const id = useRef(null)
  const navigate = useNavigate()

  const roomCollection = collection(firestore, "room")
  const handleCreate = async () => {
    const docRef = await addDoc(roomCollection, {})
    await setDoc(docRef, {
      name: inputRef.current,
      users: 1,
      myCard: true,
      chooseMyCard: 0,
      myScore: 0,

      enemyScore: 0,
      enemyCard: true,
      chooseEnemyCard: 0,
      id: docRef.id,
    })
    setCreating(false)
    id.current = docRef.id
    setTimeout(() => {
      navigate(`/multiplayer/room/${docRef.id}`)
    }, 5000)
  }

  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex'>
        <div className='w-[50%] h-[50%] max-lg:w-[80%] m-auto flex flex-col justify-evenly'>
          <div>
            <h2 className='text-[38px] font-bold'>Create room</h2>
          </div>
          {createing && (
            <>
              <div className='w-[50%] max-lg:w-[60%] mx-auto flex flex-col justify-evenly'>
                <label htmlFor="room-name" className="text-[16px] text-start text-gray-400 cursor-pointer my-[4px]">Name room:</label>
                <input
                  type="text"
                  onChange={(e) => inputRef.current = e.target.value}
                  value={inputRef.current}
                  id="room-name"
                  name="room-name"
                  className="w-full mx-auto my-[4px] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className='w-[50%] mx-auto flex justify-around'>
                <button
                  className='m-auto bg-red-500 py-[8px] px-[32px] rounded-[6px]'
                  onClick={handleCreate}
                >Create</button>
              </div>
            </>
          )}
          {createing !== true && (
            <>
              <div className='w-[50%] mx-auto flex flex-col justify-evenly'>
                <div className='text-yellow-500 font-normal'><span className='text-red-500 font-bold'>Name: </span>{inputRef.current}</div>
                <div className='text-yellow-500 font-normal'><span className='text-red-500 font-bold'>ID: </span>{id.current}</div>
                <div className='text-blue-500 font-bold'>Wait 5 second</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
