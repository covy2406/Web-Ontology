import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { CircularProgress, Modal } from "@mui/material";
import { useContext } from "react";
import { StorageContext } from "../../Context";

function HomeLayout() {
  const { isLoading, setSearchResult } = useContext(StorageContext);

  return (
    <>
      <Header setSearchResult={setSearchResult}/>
      <div className="flex px-12 py-3">
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
        <div className="flex items-center justify-center w-full h-full">
          <CircularProgress size={30} />
        </div>
      </Modal>
    </>
  );
}

export default HomeLayout;
