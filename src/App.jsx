import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignPlayer from "./pages/SignPlayer"
import LocalPlayer from "./pages/LocalPlayer"
import MultiPlayer from "./pages/MultiPlayer"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signplayer" element={<SignPlayer/>}/>
        <Route path="/localplayer" element={<LocalPlayer/>}/>
        <Route path="/multiplayer" element={<MultiPlayer/>}/>
        <Route path="/screen" element={(
          <>
            <div className="w-[100%] h-[100vh] bg-[#333]"></div>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
