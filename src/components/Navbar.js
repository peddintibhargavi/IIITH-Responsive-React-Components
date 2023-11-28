import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <>
      <IconContext.Provider value={{ color: "#undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {createSidebarData().map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

function createSidebarData() {
  return [
    {
      title: "Home",
      path: "/Home",
      icon: <FaHome />,
      cName: "nav-text",
    },
    {
      title: "Reviews",
      path: "/Reviews",
      icon: <MdPreview />,
      cName: "nav-text",
    },
    {
      title: "Table",
      path: "/Table",
      icon: <FaTable />,
      cName: "nav-text",
    },
    {
      title: "Booking",
      path: "/Booking",
      icon: <FaWpforms />,
      cName: "nav-text",
    },
    
  ];
}

export default Navbar;
export const SidebarData = createSidebarData();
