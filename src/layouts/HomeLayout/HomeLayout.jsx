import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { StorageContext } from "../../Context";

function HomeLayout() {
  const { setSearchResult } = useContext(StorageContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setSearchResult={setSearchResult} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
