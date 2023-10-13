import { BrowserRouter, Routes, Route } from "react-router-dom";
import { History, Map, Profile } from "./pages";
import './App.scss'
import { Authorizaton } from "./components/Authorization";
import SideBar from "./components/sideBar";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorizaton />} />
        </Routes>
        <SideBar>
          <Routes>
            <Route path='/' element={<Map />} />
            <Route path='/history' element={<History />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>

  )
}

export default App
