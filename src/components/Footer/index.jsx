import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={"Footer_wrapper bottom-0 flex h-[170px]"}>
      <div className="flex flex-col">
        <div className="pb-6 mb-2">
          <span className="font-bold text-[12px]">FOLLOW US</span>
          <div className="flex gap-2 text-white"></div>
        </div>
        <div className="text-white">
          <span>EMBL-EBI 2023</span>
          <a href="/"> Licensing</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
