import React, { useContext } from "react";
import SearchItem from "../../components/SearchItem";
import PropTypes from "prop-types";
import { StorageContext } from "../../layouts/HomeLayout/HomeLayout";
import { Pagination } from "@mui/material";

function Search() {
  const { searchResult, setPage } = useContext(StorageContext);

  return (
    <div className="mx-auto my-5">
      <div className="flex">
        <div className="">
          {searchResult.map((item, index) => (
            <SearchItem
              key={index}
              header={item.classLabel?.value}
              url={item.main_Xrefs?.value?.url}
              description={item.description?.value}
              links={item.Xrefs?.value}
              icon={item.main_Xrefs?.value?.icon}
              title={item.main_Xrefs?.value?.title}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Pagination
          onChange={(event, number) => {
            setPage(number);
          }}
          count={10}
          variant="outlined"
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  searchResult: PropTypes.array,
};

export default Search;
