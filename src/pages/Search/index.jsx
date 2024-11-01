import React from "react";
import SearchItem from "../../components/SearchItem";
import PropTypes from "prop-types";

function Search({ searchResult = [] }) {
  let links = searchResult[0]?.Xrefs?.value?.split(",");
  links = links?.map((link) => link.substring(link.indexOf("http")));

  console.log(links);

  return (
    <div className="w-[1500px] mx-auto my-10">
      <div className="flex">
        <div className="">
          {searchResult.map((item, index) => (
            <SearchItem
              key={index}
              header={item.classLabel?.value}
              url={item.Xref?.value?.substring(item.Xref.value.indexOf("http"))}
              description={item.description?.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  searchResult: PropTypes.array,
};

export default Search;
