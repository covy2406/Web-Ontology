const RelativeCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mx-40 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg">
          <h2 className="text-[#106462] text-2xl font-semibold hover:underline cursor-pointer">About OLS</h2>
          <p className="font-normal">
            The Ontology Lookup Service (OLS) is a repository for biomedical ontologies that aims to
            provide a single point of access to the latest ontology versions. You can browse the
            ontologies through the website as well as programmatically via the OLS API. OLS is
            developed and maintained by the Samples, Phenotypes and Ontologies Team (SPOT) 
            at EMBL-EBI.
          </p>
        </div>
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg ">
        <h2 className="text-[#106462] text-2xl font-semibold hover:underline cursor-pointer">Related Tools</h2>
          <p className="font-normal">
            In addition to OLS the SPOT team also provides the OxO  and ZOOMA  services. OxO
            provides cross-ontology mappings between terms from different ontologies. ZOOMA is a
            service to assist in mapping data to ontologies in OLS.
          </p>
        </div>
        <div className="p-4 mx-4 bg-white border-solid border-4 border-[#106462] rounded-lg">
        <h2 className="text-[#106462] text-2xl font-semibold hover:underline cursor-pointer">Report an Issue</h2>
          <p className="font-normal">
            For feedback, enquiries or suggestion about OLS or to request a new ontology please use
            our GitHub issue tracker. For announcements relating to OLS, such as new releases and
            new features sign up to the OLS announce mailing list.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RelativeCard;
