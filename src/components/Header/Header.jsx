import React, { useState } from "react";
import { backgroundImage } from "../../assest/images";
import "./Header.css";
import { Button, CircularProgress, TextField } from "@mui/material";
import { searchQuestion } from "../../services/api/search";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

          <div className="text-white flex h-fit">
            <form className="flex items-center justify-between px-2 my-6">
              <TextField
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{ width: 720, maxWidth: "100%", backgroundColor: "white" }}
                label="Search"
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
