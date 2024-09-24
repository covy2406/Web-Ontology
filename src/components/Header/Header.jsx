import React from "react";
import { backgroundImage } from "../../assest/images";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
        className="h-[144px] bg-right flex"
      >
        <div className="px-4 mx-7 flex w-full items-center gap-10">
          <div className="py-6">
            <div className="w-[177px] h-[96px] flex">
              <img
                alt=""
                className="w-full h-full object-cover"
                src="https://www.ebi.ac.uk/ols4/logo.svg"
              />
            </div>
          </div>

          <div className="text-white flex h-fit">
            <NavLink
              to={"/"}
              className={(nav) => `Header_nav-button ${nav.isActive && "Header_active"}`}
            >
              Home
            </NavLink>
            <NavLink className={"Header_nav-button"}>Ontologies</NavLink>
            <NavLink className={"Header_nav-button"}>Help</NavLink>
            <NavLink className={"Header_nav-button"}>About</NavLink>
            <NavLink className={"Header_nav-button"}>Downloads</NavLink>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
