import React, { useContext, useState } from "react";
import { backgroundImage } from "../../assest/images";
import "./Header.css";
import { Button, CircularProgress, TextField } from "@mui/material";
import { searchQuestion } from "../../services/api/search";
import { StorageContext } from "../../layouts/HomeLayout/HomeLayout";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setSearchResult } = useContext(StorageContext);

  const handleSearch = () => {
    setIsLoading(true);
    searchQuestion({ question: searchValue, page: 1, perPage: 20 })
      .then((res) => {
        console.log(res);
        setSearchResult(res?.bindings);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <header
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
        className="h-[144px] bg-right flex"
      >
        <div className="px-4 mx-7 flex w-full items-center gap-10">
          <div className="py-6">
            <div className="w-[177px] h-[96px] flex">
              <img
                alt=""
                className="w-full h-full object-cover"
                src="https://www.ebi.ac.uk/ols4/logo.svg"
              />
            </div>
          </div>

          <div className="text-white flex h-fit w-full">
            <form className="flex items-center justify-between px-2 my-6 gap-4 w-full">
              <TextField
                placeholder="What is your question?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  backgroundColor: "white",
                }}
                id="fullWidth"
              />

              <Button
                startIcon={isLoading && <CircularProgress size={24} color="white" />}
                onClick={handleSearch}
                variant="contained"
                size="large"
                sx={{ padding: "14px 12px" }}
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
