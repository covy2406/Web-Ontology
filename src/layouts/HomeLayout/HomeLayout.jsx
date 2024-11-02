import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
export const StorageContext = createContext();
function HomeLayout() {
  const [searchResult, setSearchResult] = useState([]);
  const states = {
    searchResult,
    setSearchResult,
  };
  return (
    <StorageContext.Provider value={states}>
      <Header setSearchResult={setSearchResult} />
      <Outlet />
      <Footer />
    </StorageContext.Provider>
  );
}

export default HomeLayout;
