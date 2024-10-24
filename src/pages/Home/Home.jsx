import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./home.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import { getByLabel } from "../../services/api/search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    getByLabel({ labelName: searchValue, page: 1, perPage: 20 })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-between px-12 py-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
        <div className="max-w1-re:mb-8 max-w1-re:w-auto w-[900px] rounded-md bg-[#f0f0f0] home__search-bg p-6">
          <div>
            <p className="px-2 mt-4 text-3xl font-bold">
              Welcome to the EMBL-EBI Ontology Lookup Service
            </p>
            <div className="flex items-center justify-between px-2 my-6">
              <TextField
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{ width: 720, maxWidth: "100%", backgroundColor: "white" }}
                label="Search"
                id="fullWidth"
              />
              <Button
                onClick={handleSearch}
                variant="contained"
                size="large"
                sx={{ padding: "14px 12px" }}
              >
                Search
              </Button>
            </div>
            <div className="mb-6">
              <Checkbox {...label} />
              <span>Extract match</span>
              <Checkbox {...label} /> <span>Include obsolete terms</span>
              <Checkbox {...label} defaultChecked /> <span>Include imported terms</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="px-2">
                Examples:{" "}
                <span className="text-green-600 cursor-pointer hover:underline">
                  diabetes, GO:0098743
                </span>
              </p>
              <Link className="text-green-600 cursor-pointer hover:underline">
                Looking for a particular ontology?
              </Link>
            </div>
          </div>
          <div>
            <div className=""></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="max-w1-re:mb-8 max-w1-re:w-auto border-b-8 p-6 w-[320px] border-[#00827c] rounded-md shadow-lg shadow-slate-400">
          <div className="flex items-center mb-3">
            <BarChartIcon fontSize="large" sx={{ fontSize: 40 }} />
            <p className="text-3xl font-bold">Data Content</p>
          </div>
          <div>
            <i className="text-">Updated 23 Sep 2024 Mon</i>
            <br />
            <i>04:35(+07:00)</i>
            <ul className="pt-2" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>262 ontologies</li>
              <li>8.584.670 classes</li>
              <li>44.633 properties</li>
              <li>687.081 individuals</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
