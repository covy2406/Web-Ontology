import React from "react";
import SearchResult from "../../components/SearchResult";
import SideBar from "../../components/Sidebar";

function Search(props) {
  return (
    <div className="w-[1500px] mx-auto my-10">
      <div className="flex">
        <div className="w-[740px]">
          <SearchResult />
        </div>
        <SideBar />
      </div>
    </div>
  );
}

Search.propTypes = {};

export default Search;
