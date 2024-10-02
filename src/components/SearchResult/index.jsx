import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

function SearchResult({ header, description, url, thumbnail }) {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Avatar
          sx={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderStyle: "solid",
            width: 28,
            height: 28,
          }}
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAnklEQVR4AeTNIQiDQABG4b+u17X1aF6PK3YEO9iMJqPVau82y4FgMezS0oVLhqsHtrcqeqzDXv3CEz/6L4yTtZM3dnHmPTtjzXZAXKYVo4agkU2GI2Lloc6JDez1+flswMu1EQZ3xlE7lK8eKDkjtwE+crBMV+wesKmCiisGGepZIfQJpMj9SNb2MYWrChjVkULuCyCfRvsdmBieyQQAsoDk/9ryhFMAAAAASUVORK5CYII="
        />

        <div className="flex flex-col">
          <span className=" text-[14px] text-[#202124]">Wikipedia</span>
          <p className="text-[12px]">https://en.wikipedia.org</p>
        </div>
      </div>
      <h3 className="text-[20px] text-[var(--text-blue)] hover:underline cursor-pointer">
        <a href="/">Ontology</a>
      </h3>
      <div className="text-[14px] text-[var(--text-gray)]">
        1. the branch of metaphysics dealing with the nature of being.<br></br> 2. a set of concepts
        and categories in a subject area or domain that shows their properties and the relations
        between them. "what's new about our ontology is that it is created automatically from large
        datasets"
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbNail: PropTypes.string,
};

export default SearchResult;
