import { CircularProgress, InputAdornment, Modal, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchQuestion } from "../../services/api/search";
import { StorageContext } from "../../Context";
import SearchIcon from "@mui/icons-material/Search";
import RelativeCard from "../../components/RelativeCard";

const HomeIndex = () => {
  const [localSearchValue, setLocalSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { setSearchResult, setSearchValue } = useContext(StorageContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsSearching(true);
    searchQuestion({ question: localSearchValue, page: 1, perPage: 20 })
      .then((res) => {
        setIsSearching(false);
        setSearchResult(res?.bindings);
        setSearchValue(localSearchValue);
        navigate("/search");
      })
      .catch((err) => {
        console.log(err);
        setIsSearching(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3c3c3c]">
      <div className="flex flex-col items-center gap-10">
        {/* Logo */}
        <div className="py-[6px]">
          <img
            alt="logo"
            className="w-[177px] h-[96px] object-cover"
            src="https://www.ebi.ac.uk/ols4/logo.svg"
          />
        </div>

        {/* Thanh tìm kiếm */}
        <div className="flex w-[740px] justify-center text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center justify-between w-full gap-4 px-2"
          >
            <TextField
              placeholder="What is your question?"
              value={localSearchValue}
              onChange={(e) => setLocalSearchValue(e.target.value)}
              autoComplete="off"
              sx={{
                width: "100%",
                maxWidth: "690px",
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.3)",
                "& .MuiInputBase-input": {
                  padding: "15px 14px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .Mui-focused": {
                  backgroundColor: "white",
                },
                "& .MuiInputAdornment-root": {
                  marginRight: "8px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </div>
        <RelativeCard />

        {/* Modal tìm kiếm */}
        <Modal open={isSearching}>
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
              <CircularProgress size={30} />
              <p className="mt-4 text-black">Đang tìm kiếm...</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HomeIndex;
