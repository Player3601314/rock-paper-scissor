import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignPlayer from "./pages/SignPlayer";
import LocalPlayer from "./pages/LocalPlayer";
import MultiPlayer from "./pages/MultiPlayer/MultiPlayer";
import CreateRoom from "./pages/MultiPlayer/CreateRoom";
import JoinRoom from "./pages/MultiPlayer/JoinRoom";
import { Fragment, useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase/firebase";
import { MyPapper, MyRock, MyScissor } from "./pages/MultiPlayer/MyCards";
import { EnemyPapper, EnemyRock, EnemyScissor } from "./pages/MultiPlayer/EnemyCards";
function App() {
  const [dataMap, setDataMap] = useState([])
  const [startGame, setStartGame] = useState(false)
  const roomCollection = collection(firestore, "room")

  const navigate = useNavigate()

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
  }, [])

  const handleDeleteRoom = async (id) => {
    const deleteRoom = doc(firestore, "room", id)
    await deleteDoc(deleteRoom)
    sessionStorage.clear()
    navigate("/")
  }

  const player1Func = () => {
    sessionStorage.setItem("player1", true)
    sessionStorage.setItem("player2", false)
    setStartGame(true)
    startGame ? console.log("started not game") : console.log("game started");
  }

  const player2Func = () => {
    sessionStorage.setItem("player1", false)
    sessionStorage.setItem("player2", true)
    setStartGame(true)
    startGame ? console.log("started not game") : console.log("game started");
  }

  const calcPlayer1 = async (player1, player2, score, id) => {
    sessionStorage.setItem("player2", true)
    const docRef = doc(firestore, "room", id)
    if (player1 === player2) {
      console.log("equal cards");
      setStartGame(null)
    }
    else if (player1 === 1 && player2 === 3) {
      console.log("player1 win");
      await updateDoc(docRef, {
        myScore: score + 1,
      })
      setStartGame(null)
    }
    else if (player1 === 3 && player2 === 1) {
      console.log("player2 win");
      setStartGame(null)
    }
    else if (player1 === 2 && player2 === 1) {
      console.log("player1 win");
      await updateDoc(docRef, {
        myScore: score + 1,
      })
      setStartGame(null)
    }
    else {
      console.log("error");
    }
    setStartGame(null)
  }

  const calcPlayer2 = async (player1, player2, score, id) => {
    sessionStorage.setItem("player1", true)
    const docRef = doc(firestore, "room", id)
    if (player2 === player1) {
      console.log("equal cards");
      setStartGame(null)
    }
    else if (player2 === 1 && player1 === 3) {
      console.log("player2 win");
      await updateDoc(docRef, {
        enemyScore: score + 1,
      })
      setStartGame(null)
    }
    else if (player2 === 3 && player1 === 1) {
      console.log("player1 win");
      setStartGame(null)
    }
    else if (player2 === 2 && player1 === 1) {
      console.log("player2 win");
      await updateDoc(docRef, {
        enemyScore: score + 1,
      })
      setStartGame(null)
    }
    else {
      console.log("error");
    }
    setStartGame(null)
  }

  let player1 = sessionStorage.getItem("player1")
  let player2 = sessionStorage.getItem("player2")

  const playAgain = async (id) => {
    player1 = sessionStorage.setItem("player1", false)
    player2 = sessionStorage.setItem("player2", false)
    const docRef = doc(firestore, "room", id)
    await updateDoc(docRef, {
      myCard: true,
      chooseMyCard: 0,

      enemyCard: true,
      chooseEnemyCard: 0,
      id: docRef.id,
    })
    setStartGame(false)
  }

  const resetGame = async (id) => {
    player1 = sessionStorage.setItem("player1", false)
    player2 = sessionStorage.setItem("player2", false)
    const docRef = doc(firestore, "room", id)
    await updateDoc(docRef, {
      myCard: true,
      chooseMyCard: 0,
      myScore: 0,

      enemyScore: 0,
      enemyCard: true,
      chooseEnemyCard: 0,
      id: docRef.id,
    })
    setStartGame(false)
  }

  console.log(player1, player2);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signplayer" element={<SignPlayer />} />
      <Route path="/localplayer" element={<LocalPlayer />} />
      <Route path="/multiplayer" element={<MultiPlayer />} />
      <Route path="/multiplayer/create-room" element={<CreateRoom />} />
      <Route path="/multiplayer/join-room" element={<JoinRoom />} />
      {dataMap.map((data) => {
        return (
          <Fragment key={data.id}>
            <Route path={`/multiplayer/room/${data.id}`} element={
              <>
                <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex flex-col py-[20px]'>
                  <div className="flex items-center justify-evenly">
                    <div className="py-[5px] px-[10px] rounded-[6px] bg-red-500 cursor-pointer" onClick={() => handleDeleteRoom(data.id)}>{"<Exit"}</div>
                    <div className="py-[5px] px-[10px] rounded-[6px] bg-blue-500"><button onClick={() => resetGame(data.id)}>Reset Game</button></div>
                  </div>
                  <div className="w-[100%] h-[60px] mt-[40px] flex justify-evenly items-center">
                    <div className="bg-green-500 py-[6px] px-[14px] rounded-[6px]">Player 1: {data.myScore}</div>
                    <div className="bg-green-500 py-[6px] px-[14px] rounded-[6px]">Player 2: {data.enemyScore}</div>
                  </div>
                  <div className='w-[50%] h-[50%] max-lg:w-[80%] m-auto flex flex-col justify-evenly'>

                    {player1 !== "true" && player2 !== "true" && (
                      <>
                        <div className="font-bold">Room name: <span className="font-normal text-blue-500">{data.name}</span></div>
                        <div className="font-bold">Room ID: <span className="font-normal text-red-500">{data.id}</span></div>
                        <div>Choose your player</div>
                        <div className="w-[80%] mx-auto flex justify-evenly">
                          <button onClick={player1Func} className="py-[6px] px-[14px] rounded-[6px] bg-green-500 hover:bg-green-600 font-semibold">Player 1</button>
                          <button onClick={player2Func} className="py-[6px] px-[14px] rounded-[6px] bg-green-500 hover:bg-green-600 font-semibold">Player 2</button>
                        </div>
                      </>
                    )}
                    <div className="flex items-center">
                      {player1 === "true" && (
                        <>
                          {player1 === "true" && player2 !== "true" && data.chooseMyCard === 0 && (
                            <div className="flex mx-auto">
                              <MyRock data={data} />
                              <MyPapper data={data} />
                              <MyScissor data={data} />
                            </div>
                          )}

                          {player1 === "true" && data.chooseMyCard === 1 && (<MyRock data={data} />)}
                          {player1 === "true" && data.chooseMyCard === 2 && (<MyPapper data={data} />)}
                          {player1 === "true" && data.chooseMyCard === 3 && (<MyScissor data={data} />)}
                        </>
                      )}

                      {player2 === "true" && (
                        <>
                          {player1 !== "true" && player2 === "true" && data.chooseEnemyCard === 0 && (
                            <div className="flex mx-auto">
                              <EnemyRock data={data} />
                              <EnemyPapper data={data} />
                              <EnemyScissor data={data} />
                            </div>
                          )}

                          {player2 === "true" && data.chooseEnemyCard === 1 && (<EnemyRock data={data} />)}
                          {player2 === "true" && data.chooseEnemyCard === 2 && (<EnemyPapper data={data} />)}
                          {player2 === "true" && data.chooseEnemyCard === 3 && (<EnemyScissor data={data} />)}
                        </>
                      )}
                    </div>

                    {data.chooseMyCard !== 0 && data.chooseEnemyCard !== 0 && startGame !== false && player2 !== "true" && (
                      <button
                        className="w-[140px] mx-auto px-[14px] py-[6px] rounded-[6px] bg-green-500"
                        onClick={() => calcPlayer1(data.chooseMyCard, data.chooseEnemyCard, data.myScore, data.id)}>Show Player 2</button>
                    )}

                    {data.chooseMyCard !== 0 && data.chooseEnemyCard !== 0 && startGame !== false && player1 !== "true" && (
                      <button className="w-[140px] mx-auto px-[14px] py-[6px] rounded-[6px] bg-green-500" onClick={() => calcPlayer2(data.chooseMyCard, data.chooseEnemyCard, data.enemyScore, data.id)}>Show Player 1</button>
                    )}

                    {player1 === "true" && player2 === "true" && (<button className="w-[120px] mx-auto px-[14px] py-[6px] rounded-[6px] bg-green-500" onClick={() => playAgain(data.id)}>Play again</button>)}
                  </div>
                </div>
              </>
            } />
          </Fragment>
        )
      })}
      <Route path="*" element={<>
        <div className='w-[100%] h-[100vh] bg-[#031F35] text-[#fff] text-center flex flex-col m-auto'>
          <h2 className="mx-auto mt-auto text-[48px]"><span className="text-red-500">404 </span><span className="text-yellow-500">not</span><span className="text-blue-500"> found</span>
          </h2>
          <Link to={"/"} onClick={() => sessionStorage.clear()} className="w-[220px] mx-auto mb-auto text-[24px] underline text-red-500">
            Back to home page
          </Link>
        </div>
      </>} />

    </Routes>
  );
}

export default App;
