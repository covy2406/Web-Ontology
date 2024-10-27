import React from "react";
import SearchItem from "../../components/SearchItem";
import SideBar from "../../components/Sidebar";
import PropTypes from "prop-types";

function Search({ searchResult = [] }) {
  return (
    <div className="w-[1500px] mx-auto my-10">
      <div className="flex">
        <div className="w-[740px]">
          {searchResult.map((item, index) => (
            <SearchItem
              key={index}
              header={item.classLabel?.value}
              url={item.Xref?.value?.substring(item.Xref.value.indexOf("http"))}
              description={item.description?.value}
            />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

Search.propTypes = {
  searchResult: PropTypes.array,
};

export default Search;
