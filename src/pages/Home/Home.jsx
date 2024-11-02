import React from "react";
import "./home.css";
import Search from "../Search";

const Home = () => {
  return (
    <>
      <div className="flex justify-between px-12 py-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
        <div className="flex flex-col">
          <Search />
        </div>
      </div>
    </>
  );
};
export default Home;
