import { NavLink } from "react-router-dom";
import './index.scss'

export default function SideBar({ children }: any) {
    const menuItem = [
        {
            path: "/main",
            name: "Main",
            icon: '../icons8-банк-64.png'
        },
        {
            path: "/page1",
            name: "Page1",
            icon: '../icons8-банк-64.png'
        },
        {
            path: "/page2",
            name: "Page2",
            icon: '../icons8-банк-64.png'
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