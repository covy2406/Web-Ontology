import { backgroundImage } from "../../assest/images";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
        </div>
      </header>
    </>
  );
};
export default Header;
