import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HistoryPage, MapPage, ProfilePage } from "./pages";
import './App.scss'
import { Authorizaton } from "./components/Authorization";
import SideBar from "./components/SideBar";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorizaton />} />
        </Routes>
        <SideBar>
          <Routes>
            <Route path='/' element={<MapPage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>

  )
}

export default App
