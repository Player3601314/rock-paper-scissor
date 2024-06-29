import { doc, updateDoc } from "firebase/firestore"
import React from "react"
import { firestore } from "../../firebase/firebase"

import rockImg from "../../assets/rock.png"
import papperImg from "../../assets/papper.png"
import scissorImg from "../../assets/scissor.png"


export const EnemyRock = ({ data }) => {

  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseEnemyCard: 1,
    })
  }

  return (
    <>
      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={rockImg} id="enemyCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  );
};


export const EnemyPapper = ({ data }) => {


  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseEnemyCard: 2,
    })
  }

  return (
    <>
      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={papperImg} id="enemyCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  )
}

export const EnemyScissor = ({ data }) => {


  const handleChoose = async () => {
    const docRef = doc(firestore, "room", data.id)
    await updateDoc(docRef, {
      chooseEnemyCard: 3,
    })
  }

  return (
    <>

      <div key={data.id} className="w-[100%] flex justify-between">
        <img src={scissorImg} id="enemyCard" onClick={handleChoose} className="mx-auto cursor-pointer" />
      </div>
    </>
  )
}