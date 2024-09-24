import React from "react";
import { backgroundImage } from "../../assest/images";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

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
            <button className={cx("nav-button")}>Home</button>
            <button className={cx("nav-button")}>Ontologies</button>
            <button className={cx("nav-button")}>Help</button>
            <button className={cx("nav-button")}>About</button>
            <button className={cx("nav-button")}>Downloads</button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
