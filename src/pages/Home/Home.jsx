import React from "react";
import "./home.css";
import Search from "../Search";
import BuildIcon from "@mui/icons-material/Build";
import ReportIcon from "@mui/icons-material/Report";
import BarChartIcon from "@mui/icons-material/BarChart";
const Home = () => {
  return (
    <>
      <div className="flex px-12 pb-8 xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-8">
        <div className="flex flex-col w-[1024px]">
          <Search />
        </div>

        <div>
          <div
            className="p-4 flex flex-col rounded-lg"
            style={{
              boxShadow: "0px 2px 6px rgb(82 82 82 / 50%)",
              borderBottom: "10px solid var(--primary)",
            }}
          >
            <div className="mb-3 flex items-center">
              <BarChartIcon />
              <span className="text-2xl font-semibold">Data Content</span>
            </div>
            <div className="text-sm italic mb-2">Updated 2 Nov 2024 Sat 23:41(+07:00)</div>
            <ul className="list-disc pl-4">
              <li>14058 classes</li>
              <li>55 properties</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-[1024px] m-auto mb-3 gap-10">
        <div className="px-2">
          <h2 className="text-[var(--primary)] text-[24px] font-semibold hover:underline cursor-pointer">
            About OLS
          </h2>
          <p className="text-justify">
            The Ontology Lookup Service (OLS) is a repository for biomedical ontologies that aims to
            provide a single point of access to the latest ontology versions. You can browse the
            ontologies through the website as well as programmatically via the OLS API. OLS is
            developed and maintained by the Samples, Phenotypes and Ontologies Team (SPOT) 
            at EMBL-EBI.
          </p>
        </div>
        <div className="px-2">
          <div className="flex items-center gap-2">
            <BuildIcon sx={{ color: "var(--orange)" }} />
            <h2 className="text-[var(--primary)] text-[24px] font-semibold hover:underline cursor-pointer">
              Related Tools
            </h2>
          </div>
          <p className="text-justify">
            In addition to OLS the SPOT team also provides the OxO  and ZOOMA  services. OxO
            provides cross-ontology mappings between terms from different ontologies. ZOOMA is a
            service to assist in mapping data to ontologies in OLS.
          </p>
        </div>
        <div className="px-2">
          <div className="flex items-center gap-2">
            <ReportIcon sx={{ color: "var(--orange)" }} />
            <h2 className="text-[var(--primary)] text-[24px] font-semibold hover:underline cursor-pointer">
              Report issue
            </h2>
          </div>
          <p className="text-justify">
            For feedback, enquiries or suggestion about OLS or to request a new ontology please use
            our GitHub issue tracker. For announcements relating to OLS, such as new releases and
            new features sign up to the OLS announce mailing list.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
