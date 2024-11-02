import React, { useContext } from "react";
import SearchItem from "../../components/SearchItem";
import PropTypes from "prop-types";
import { StorageContext } from "../../layouts/HomeLayout/HomeLayout";
import { Pagination } from "@mui/material";

function Search() {
  const { searchResult, setPage } = useContext(StorageContext);

  let links = searchResult[0]?.Xrefs?.value?.split(",");
  links = links?.map((link) => link.substring(link.indexOf("http")));

  return (
    <div className="mx-auto my-5">
      <div className="flex">
        <div className="">
          {searchResult.map((item, index) => (
            <SearchItem
              key={index}
              header={item.classLabel?.value}
              url={item.Xref?.value?.substring(item.Xref.value.indexOf("http"))}
              description={item.description?.value}
              links={links}
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
