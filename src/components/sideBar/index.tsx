import { NavLink } from "react-router-dom";
import './index.scss'
import { useState } from "react";
import { LogoIcon, SignUpIcon } from "../../UI/icons";

export default function SideBar({ children }: any) {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const menuItem = [
    {
      path: "/",
      name: "Map",
      icon: <img src="../icons8-map-100.png"></img>,
    },
    {
      path: "/history",
      name: "History",
      icon: <img src="../icons8-history-96.png"></img>,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <img src="../icons8-user-96-2.png"></img>,
    },
    {
      path: "/authorization",
      name: "Войти",
      icon: <SignUpIcon fill="white" />,
    }
  ]
  return (
    <div className="container">
      <div className={isSideBarActive ? "sidebar" : "sidebar close"}>
        <div className="top_section">
          <div className="logo">
            <LogoIcon fill="white"/>
          </div>
          <button
            className={isSideBarActive ? "" : "close"}
            onClick={() => setIsSideBarActive(!isSideBarActive)}
          >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </button>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={({ isActive }) => isActive ? "active-class" : "non-active-class"} >
              <div className="icon">
                {item.icon} 
              </div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}