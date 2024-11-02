import React from "react";
import "./home.css";
import Search from "../Search";

const Home = () => {
  return (
    <>
      <div className="flex justify-center px-12 pb-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
        <div className="flex flex-col w-[1024px]">
          <Search />
        </div>
      </div>
    </>
  );
};
export default Home;
