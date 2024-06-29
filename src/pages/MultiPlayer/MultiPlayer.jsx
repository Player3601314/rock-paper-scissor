import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { firestore } from '../../firebase/firebase'

const MultiPlayer = () => {

  const [modal, setModal] = useState(false)
  const [dataMap, setDataMap] = useState([])
  const roomCollection = collection(firestore, "room")
  const navigate = useNavigate()

  const handleInter =  async(id,users) => {
    if(users === 2) return alert("The room has been full")
    const docRef = doc(firestore, "room", id)
    await updateDoc(docRef, {
      users: users + 1,
    })
    navigate(`/multiplayer/room/${id}`)
  }
  useEffect(() => {
    onSnapshot(roomCollection, (snapShot) => {
      let data = []
      snapShot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      setDataMap(data)
    },
      (error) => {
        console.log(error)
      }
    )
  })

  return (
    <>
      <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex'>
        <div className='w-[50%] h-[50%] max-lg:w-[80%] max-lg:h-[60%] m-auto flex flex-col justify-evenly'>
          <div>
            <h2 className='text-[38px] font-bold'>Create or Join room</h2>
          </div>
          <Link className='w-[40%] mx-auto max-lg:w-[60%]' to={"/multiplayer/create-room"}>
            <div className='py-[6px] rounded-[6px] mx-auto bg-red-500 text-[#fff] font-bold'>
              Create
            </div>
          </Link>
          <Link className='w-[40%] mx-auto max-lg:w-[60%]' to={"/multiplayer/join-room"}>
            <div className='py-[6px] rounded-[6px] mx-auto bg-blue-500 text-[#fff] font-bold'>
              Join
            </div>
          </Link>
          <div
            className='w-[40%] py-[6px] max-lg:w-[60%] rounded-[6px] mx-auto bg-yellow-500 text-[#fff] font-bold cursor-pointer'
            onClick={() => setModal(true)}
          >
            Rooms
          </div>
        </div>
      </div>
      {modal && (
        <>
          <div
            className='w-[100%] h-[100vh] bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-10 flex'
            onClick={() => setModal(false)}
          >
            <div className='w-[60%] h-[50%] bg-[#333] m-auto rounded-[6px]'>
              <div>
                <h2 className='text-[34px] text-[#fff] text-center'>All rooms</h2>
              </div>
              <div className='w-[100%] h-[70%] overflow-y-scroll'>
                {dataMap.map((data) => (
                  <Fragment key={data.id}>
                    <div className='w-[80%] bg-yellow-500 hover:bg-yellow-400 font-medium mx-auto text-center rounded-[6px] my-[35px]'>
                      <Link
                        onClick={()=>handleInter(data.id, data.users)}
                      >
                        <p className='text-blue-500'>Name: {data.name}</p>
                        <p className='text-red-500'>ID: {data.id}</p>
                        <p className='text-green-500'>Users: {data.users}/2</p>
                      </Link>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MultiPlayer