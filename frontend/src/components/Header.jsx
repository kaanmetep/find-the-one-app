import MainLogo from "../components/MainLogo";
import HomeNav from "../components/HomeNav";
import Button from "../components/Button";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
function Header() {
  const { onSetShowLogInPopUp } = useContext(AppContext);
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:pl-2 lg:px-8 py-4 justify-center sticky z-50 top-0 bg-gradient-to-r from-red-50 to-red-300">
      <MainLogo />
      <HomeNav />
      <div className="lg:ml-auto">
        <Button
          onClick={() => {
            onSetShowLogInPopUp(true);
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Header;
