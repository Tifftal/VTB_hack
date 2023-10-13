import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1, Page2, Main } from "./pages";
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
            <Route path='/main' element={<Main />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>

  )
}

export default App
