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
