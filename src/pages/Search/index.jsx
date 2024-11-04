import React, { useContext, useEffect, useState } from "react";
import SearchItem from "../../components/SearchItem";
import PropTypes from "prop-types";
import { StorageContext } from "../../Context";
import { Button, CircularProgress, Pagination, TextField } from "@mui/material";
import { searchQuestion } from "../../services/api/search";

function Search() {
  const { searchResult, setPage } = useContext(StorageContext);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { setSearchResult, page, setIsLoading } = useContext(StorageContext);

  const handleSearch = () => {
    setIsSearching(true);
    searchQuestion({ question: searchValue, page: page, perPage: 20 })
      .then((res) => {
        if (res.bindings) {
          setSearchResult(res.bindings);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsSearching(false));
  };

  useEffect(() => {
    if (searchValue) {
      setIsLoading(true);
      searchQuestion({ question: searchValue, page: page, perPage: 20 })
        .then((res) => {
          setSearchResult(res?.bindings);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsSearching(false);
          setIsLoading(false);
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 250);
        });
    }

    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="">
      <div className="flex w-full text-white h-fit">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex items-center justify-between w-full gap-4 px-2 my-6"
        >
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
            startIcon={isSearching && <CircularProgress size={24} color="white" />}
            onClick={handleSearch}
            variant="contained"
            size="large"
            sx={{ padding: "14px 12px" }}
          >
            Search
          </Button>
        </form>
      </div>
      <div className="flex">
        <div className="">
          {searchResult.map((item, index) => (
            <SearchItem
              key={index}
              header={item.classLabel?.value}
              url={item.Xrefs?.value[0]}
              description={item.description?.value}
              links={item.Xrefs?.value}
              icon={item.main_Xrefs?.value?.icon}
              title={item.main_Xrefs?.value?.title}
            />
          ))}
        </div>
      </div>
      {searchResult.length > 0 && (
        <div className="flex justify-center flex-1">
          <Pagination
            onChange={(event, number) => {
              setPage(number);
            }}
            count={10}
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
}

Search.propTypes = {
  searchResult: PropTypes.array,
};

export default Search;
