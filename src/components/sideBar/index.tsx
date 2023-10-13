import { NavLink } from "react-router-dom";
import './index.scss'

export default function SideBar({ children }: any) {
    const menuItem = [
        {
            path: "/",
            name: "Map",
            icon: '../icons8-map-100.png'
        },
        {
            path: "/history",
            name: "History",
            icon: '../icons8-history-96.png'
        },
        {
            path: "/profile",
            name: "Profile",
            icon: '../icons8-user-96-2.png'
        }
    ]
    return (
        <div className="container">
            <div className="SideBar">
                <div className="top_section">
                    <img src="../Group 7-3.png" />
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={({ isActive }) => isActive ? "active-class" : "non-active-class"} >
                            <img src={item.icon} />
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <a href="/authorization">Sign Up</a>
            </div>
            <main>{children}</main>
        </div>
    )
}