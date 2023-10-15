import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HistoryPage, MapPage, ProfilePage } from "./pages";
import './App.scss'
import { Authorizaton } from "./components/Authorization";
import SideBar from "./components/SideBar";
import { Private } from "./store/axiosCore/Private";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorizaton />} />
        </Routes>
        <SideBar path="/">
          <Routes>
            <Route index element={<Private><MapPage /></Private>} />
            <Route path='history' element={<HistoryPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>

  )
}

export default App
