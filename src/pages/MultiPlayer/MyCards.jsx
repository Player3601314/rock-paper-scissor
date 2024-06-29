import { doc, updateDoc } from "firebase/firestore"
import React from "react"
import { firestore } from "../../firebase/firebase"

import rockImg from "../../assets/rock.png"
import papperImg from "../../assets/papper.png"
import scissorImg from "../../assets/scissor.png"


export const MyRock = ({ data }) => {

  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseMyCard: 1,
    })
  }

  return (
    <>
      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={rockImg} id="myCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  );
};


export const MyPapper = ({ data }) => {


  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseMyCard: 2,
    })
  }

  return (
    <>
      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={papperImg} id="myCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  )
}

export const MyScissor = ({ data }) => {

  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseMyCard: 3,
    })
  }

  return (
    <>
      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={scissorImg} id="myCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  )
}