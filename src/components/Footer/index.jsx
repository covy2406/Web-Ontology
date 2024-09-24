import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx(["wrapper", "flex h-[170px]"])}>
      <div className="flex flex-col">
        <div className="mb-2 pb-6">
          <span className="font-bold text-[12px]">FOLLOW US</span>
          <div className="flex gap-2 text-white">
            <FontAwesomeIcon fontSize={24} icon={faGithub} />
            <FontAwesomeIcon fontSize={24} icon={faXTwitter} />
          </div>
        </div>
        <div className="text-white">
          <span>EMBL-EBI 2023</span>
          <a> Licensing</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
