import React, { useContext } from "react";
import SearchItem from "../../components/SearchItem";
import PropTypes from "prop-types";
import { StorageContext } from "../../Context";
import { Pagination } from "@mui/material";

function Search() {
  const { searchResult, setPage } = useContext(StorageContext);

  return (
    <div className="">
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
