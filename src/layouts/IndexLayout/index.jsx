import React, { useContext } from "react";
import { CircularProgress, Modal } from "@mui/material";
import HomeIndex from "../../pages/HomeIndex";
import { StorageContext } from "../../Context";
function IndexLayout() {
  const { setSearchResult, isLoading } = useContext(StorageContext);
  return (
      <div>
        <HomeIndex setSearchResult={setSearchResult}/>
        <Modal open={isLoading}>
          <div className="flex items-center justify-center w-full h-full">
            <CircularProgress size={30} />
          </div>
        </Modal>
      </div>

  );
}

export default IndexLayout;
