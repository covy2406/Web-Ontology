import React, { createContext, useState } from "react";

export const StorageContext = createContext();

function StorageProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const states = {
    searchResult,
    setSearchResult,
    page,
    setPage,
    setIsLoading,
    isLoading
  };

  return (
    <StorageContext.Provider value={states}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageProvider;