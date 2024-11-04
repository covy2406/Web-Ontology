import { CircularProgress, InputAdornment, Modal, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchQuestion } from "../../services/api/search";
import { StorageContext } from "../../Context";
import SearchIcon from "@mui/icons-material/Search";

const HomeIndex = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { setSearchResult, page, setIsLoading } = useContext(StorageContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsSearching(true);
    searchQuestion({ question: searchValue, page: page, perPage: 20 })
      .then((res) => {
        setSearchResult(res?.bindings);
        navigate("/search");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsSearching(false));
  };

  useEffect(() => {
    if (searchValue) {
      setIsLoading(true);
      searchQuestion({ question: searchValue, page: page, perPage: 20 })
        .then((res) => {
          setSearchResult(res?.bindings);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsSearching(false);
          setIsLoading(false);
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 250);
        });
    }

    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="bg-[#3c3c3c] min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full gap-10 px-4 mx-7">
        <div className="py-[6px]">
          <div className="w-[177px] h-[96px] flex">
            <img
              alt=""
              className="object-cover w-full h-full"
              src="https://www.ebi.ac.uk/ols4/logo.svg"
            />
          </div>
        </div>
        <div className="flex w-[740px] justify-center text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center justify-between w-full gap-4 px-2 "
          >
            <TextField
              placeholder="What is your question?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: "100%",
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
                "&:hover": {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              id="fullWidth"
            />
          </form>
        </div>
      </div>
      <Modal open={isSearching}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
            <CircularProgress size={30} />
            <p className="mt-4 text-black">Đang tìm kiếm...</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeIndex;

// import { CircularProgress, InputAdornment, Modal, TextField } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { searchQuestion } from "../../services/api/search";
// import { StorageContext } from "../../layouts/IndexLayout";
// import SearchIcon from "@mui/icons-material/Search";

// const HomeIndex = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [isSearching, setIsSearching] = useState(false);
//   const { setSearchResult, page, setIsLoading } = useContext(StorageContext);
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     setIsSearching(true);
//     searchQuestion({ question: searchValue, page: page, perPage: 20 })
//       .then((res) => {
//         setSearchResult(res?.bindings);
//         navigate("/search");
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setIsSearching(false));
//   };

//   useEffect(() => {
//     if (searchValue) {
//       setIsLoading(true);
//       searchQuestion({ question: searchValue, page: page, perPage: 20 })
//         .then((res) => {
//           setSearchResult(res?.bindings);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         .finally(() => {
//           setIsSearching(false);
//           setIsLoading(false);
//           setTimeout(() => {
//             window.scrollTo(0, 0);
//           }, 250);
//         });
//     }

//     // eslint-disable-next-line
//   }, [page]);

//   return (
//     <div className="bg-[#3c3c3c] min-h-screen flex flex-col items-center justify-center">
//       <div className="flex flex-col items-center w-full gap-10 px-4 mx-7">
//         <div className="py-[6px]">
//           <div className="w-[177px] h-[96px] flex">
//             <img
//               alt=""
//               className="object-cover w-full h-full"
//               src="https://www.ebi.ac.uk/ols4/logo.svg"
//             />
//           </div>
//         </div>

//         <div className="flex w-[740px] justify-center text-black">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleSearch();
//             }}
//             className="flex items-center justify-between w-full gap-4 px-2 "
//           >
//             <TextField
//               placeholder="What is your question?"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               sx={{
//                 width: "100%",
//                 maxWidth: "100%",
//                 backgroundColor: "white",
//                 borderRadius: "30px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     border: "none",
//                   },
//                 },
//                 "&:hover": {
//                   boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
//                 },
//               }}
//               InputProps={{
//                 disableUnderline: true,
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               id="fullWidth"
//             />
//           </form>
//         </div>
//       </div>
//       <Modal open={isSearching}>
//         <div className="flex items-center justify-center w-full h-full">
//           <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
//             <CircularProgress size={30} />
//             <p className="mt-4 text-black">Đang tìm kiếm...</p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default HomeIndex;
