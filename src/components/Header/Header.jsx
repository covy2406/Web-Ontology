import { backgroundImage } from "../../assest/images";
import "./Header.css";
import { Button, CircularProgress, Modal, TextField } from "@mui/material";
import { searchQuestion } from "../../services/api/search";
import { Link, useNavigate } from "react-router-dom";
import { StorageContext } from "../../Context";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const { setSearchResult, page, searchValue, setSearchValue } = useContext(StorageContext);
  const [start, setStart] = useState(true);
  const navigate = useNavigate();
  const handleSearch = () => {
    setIsSearching(true);
    setSearchValue(localSearchValue);
    searchQuestion({ question: localSearchValue, page: page, perPage: 20 })
      .then((res) => {
        setSearchResult(res?.bindings);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsSearching(false));
  };

  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  useEffect(() => {
    if (start) {
      return setStart(false);
    }

    if (searchValue) {
      setIsSearching(true);
      searchQuestion({ question: searchValue, page: page, perPage: 20 })
        .then((res) => {
          setSearchResult(res?.bindings);
          navigate("/search");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsSearching(false);
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 250);
        });
    }

    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <header
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
        className="h-[144px] bg-right flex"
      >
        <div className="flex items-center w-full gap-10 px-4 mx-7">
          <Link to={"/"} className="py-6">
            <div className="w-[177px] h-[96px] flex">
              <img
                alt=""
                className="object-cover w-full h-full"
                src="https://www.ebi.ac.uk/ols4/logo.svg"
              />
            </div>
          </Link>

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
                value={localSearchValue}
                onChange={(e) => setLocalSearchValue(e.target.value)}
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
        </div>
      </header>

      <Modal open={isSearching}>
        <div className="flex items-center justify-center w-full h-full">
          <CircularProgress size={30} />
        </div>
      </Modal>
    </>
  );
};
export default Header;
