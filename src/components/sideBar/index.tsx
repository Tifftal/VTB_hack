import { NavLink } from "react-router-dom";
import './index.scss'
import { useState } from "react";
import { LogoIcon, SignUpIcon } from "../../UI/icons";
import { useDispatch, useSelector } from "../../store/store";
import { saveLogin, savelogout, selectLog } from "../../store/slices/pointsSlise";
import { api } from "../../store/axiosCore/api";

export default function SideBar({ children }: any) {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const isAuth = useSelector(selectLog);
  const dispatch = useDispatch()

  console.log(isAuth);

  const menuItem = [
    {
      path: "/",
      name: "Карта",
      icon: <img src="../icons8-map-100.png"></img>,
    },
    {
      path: "/history",
      name: "История",
      icon: <img src="../icons8-history-96.png"></img>,
    },
    {
      path: "/profile",
      name: "Профиль",
      icon: <img src="../icons8-user-96-2.png"></img>,
    },
    {
      path: "/authorization",
      name: isAuth ? "Выйти" : "Войти",
      icon: <SignUpIcon fill="white" />,
    }
  ]
  return (
    <div className="container">
      <div className={isSideBarActive ? "sidebar" : "sidebar close"}>
        <div className="top_section">
          <div className="logo">
            <LogoIcon fill="white" />
            <LogoIcon fill="white" />
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
            <NavLink
              onClick={isAuth ? () => dispatch(savelogout) : () => dispatch(saveLogin)}
              to={item.path} key={index} className={({ isActive }) => isActive ? "active-class" : "non-active-class"}
            >
              <div className="icon">
                {item.icon}
                {item.icon}
              </div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
        <NavLink to="/authorization" className={({ isActive }) => isActive ? "active-class" : "non-active-class"} onClick={() => {
          api.put(`/api/users/logout`)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          })
        }}>
          <div className="icon">
            <SignUpIcon fill="white" />
          </div>
          <div className="link_text">Выйти</div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  )
}