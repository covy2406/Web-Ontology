import React, { useContext } from "react";
import "./home.css";
import Search from "../Search";
import BarChartIcon from "@mui/icons-material/BarChart";
import { StorageContext } from "../../Context";
const Home = () => {
  const { searchResult } = useContext(StorageContext);
  return (
    <>
      {searchResult.length > 0 ? (
        <div>
          <div className="flex px-12 py-3">
            <div className="px-[10px] py-2 text-[#1f1f1f] border-b-[3px] border-[#1f1f1f] cursor-pointer">
              All
            </div>
            <div className="px-[10px] py-2 text-[#1f1f1f] border-b-[3px] border-[transparent] cursor-pointer">
              Images
            </div>
          </div>
          <div className="flex gap-8 px-12 pb-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col">
            <div className="flex flex-col w-[1024px]">
              <Search />
            </div>
            <div>
              <div
                className="flex flex-col p-4 rounded-lg"
                style={{
                  boxShadow: "0px 2px 6px rgb(82 82 82 / 50%)",
                  borderBottom: "10px solid var(--primary)",
                }}
              >
                <div className="flex items-center mb-3">
                  <BarChartIcon />
                  <span className="text-2xl font-semibold">Data Content</span>
                </div>
                <div className="mb-2 text-sm italic">Updated 2 Nov 2024 Sat 23:41(+07:00)</div>
                <ul className="pl-4 list-disc">
                  <li>260 ontologies</li>
                  <li>8.647.987 classes</li>
                  <li>45.186 properties</li>
                  <li>821.937 individuals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center my-5 h-72 ">
          <p className="text-3xl font-semibold text-gray-600">No result found</p>
        </div>
      )}
    </>
  );
};
export default Home;
