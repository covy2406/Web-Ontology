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
    <div className="flex flex-col min-h-screen">
      <Header setSearchResult={setSearchResult} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <Modal open={isLoading}>
        <div className="flex items-center justify-center w-full h-full">
          <CircularProgress size={30} />
        </div>
      </Modal>
    </div>
  );
}

export default HomeLayout;
