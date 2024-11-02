import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { CircularProgress, Modal } from "@mui/material";
export const StorageContext = createContext();
function HomeLayout() {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const states = {
    searchResult,
    setSearchResult,
    page,
    setPage,
    setIsLoading,
  };
  return (
    <StorageContext.Provider value={states}>
      <Header setSearchResult={setSearchResult} />
      <div className="px-12 flex py-3">
        <div className="px-[10px] py-2 text-[#1f1f1f] border-b-[3px] border-[#1f1f1f] cursor-pointer">
          All
        </div>
        <div className="px-[10px] py-2 text-[#1f1f1f] border-b-[3px] border-[transparent] cursor-pointer">
          Images
        </div>
      </div>
      <Outlet />
      <Footer />

      <Modal open={isLoading}>
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size={30} />
        </div>
      </Modal>
    </StorageContext.Provider>
  );
}

export default HomeLayout;
