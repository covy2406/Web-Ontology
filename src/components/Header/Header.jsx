import React from "react";
import { backgroundImage } from "../../assest/images";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

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
                className="w-full h-full object-cover"
                src="https://www.ebi.ac.uk/ols4/logo.svg"
              />
            </div>
          </div>

          <div className="text-white flex h-fit">
            <NavLink to={"/"} className={(nav) => cx("nav-button", { active: nav.isActive })}>
              Home
            </NavLink>
            <NavLink className={cx("nav-button")}>Ontologies</NavLink>
            <NavLink className={cx("nav-button")}>Help</NavLink>
            <NavLink className={cx("nav-button")}>About</NavLink>
            <NavLink className={cx("nav-button")}>Downloads</NavLink>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
