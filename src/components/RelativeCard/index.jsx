import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BuildIcon from "@mui/icons-material/Build";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const RelativeCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mx-44 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg">
          <div className="flex items-center">
            <TravelExploreIcon sx={{ color: "#cccc34" }} />
            <h2 className="text-[#106462] ml-2 text-2xl font-semibold hover:underline cursor-pointer">
              About OLS
            </h2>
          </div>
          <p className="mt-2 font-light text-left">
            The Ontology Lookup Service (OLS) is a repository for biomedical ontologies that aims to
            provide a single point of access to the latest ontology versions. You can browse the
            ontologies through the website as well as programmatically via the OLS API. OLS is
            developed and maintained by the 
            <span className="text-[#106462] underline cursor-pointer">QPVN Team</span>  at 
            <span className="text-[#106462] underline cursor-pointer">DUT University</span>.
          </p>
        </div>
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg ">
          <div className="flex items-center">
            <BuildIcon sx={{ color: "#cccc34" }} />
            <h2 className="text-[#106462] ml-2 text-2xl font-semibold hover:underline cursor-pointer">
              Biomedical ontologies?
            </h2>
          </div>
          <p className="mt-2 font-light text-left">
            Biomedical ontologies organize complex medical terms and relationships, enabling data
            sharing and analysis across systems. This improves research, healthcare, and supports AI
            in personalized medicine.
          </p>
        </div>
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg">
          <div className="flex items-center">
            <ReportGmailerrorredIcon sx={{ color: "#cccc34" }} />
            <h2 className="text-[#106462] ml-2 text-2xl font-semibold hover:underline cursor-pointer">
              Report an Issue
            </h2>
          </div>
          <p className="mt-2 font-light text-left">
            For feedback, enquiries or suggestion about OLS or to request a new ontology please use
            our 
            <span className="text-[#106462] underline cursor-pointer">GitHub issue tracker</span>.
            For announcements relating to OLS, such as new releases and new features sign up to the 
            <span className="text-[#106462] underline cursor-pointer">
              OLS announce mailing list
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export default RelativeCard;
