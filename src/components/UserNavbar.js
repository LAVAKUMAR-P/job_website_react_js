import React, { useState, useEffect } from "react";
import "./Navbar_login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { User_Data_Navbar } from "./User_Data_Navbar";

export default function UserNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <Link to="/" ><span className="site_title">Job Portel</span></Link>
      {(toggleMenu || screenWidth > 541) && (
        <ul className="list">
          {User_Data_Navbar.map((data, index) => {
            return (
              <Link
                to={data.path}
                className="items"
                onClick={toggleNav}
                key={index + 3}
              >
                {data.title}
              </Link>
            );
          })}
        </ul>
      )}
      {!toggleMenu ? (
        
        <AiIcons.AiOutlineMenu onClick={toggleNav} className="btn" />
        
      ) : (
        
        <AiIcons.AiOutlineClose onClick={toggleNav} className="btn" />
        
      )}
    </nav>
  );
}