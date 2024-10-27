import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

function SearchItem({ header, description, url, thumbnail }) {
  header = header.charAt(0).toUpperCase() + header.slice(1);
  return (
    <div className="mb-5">
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
          <p className="text-[12px]">{url}</p>
        </div>
      </div>
      <h3 className="text-[20px] text-[var(--text-blue)] hover:underline cursor-pointer">
        <a href={url}>{header}</a>
      </h3>
      <div className="text-[14px] text-[var(--text-gray)]">{description}</div>
    </div>
  );
}

SearchItem.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbNail: PropTypes.string,
};

export default SearchItem;