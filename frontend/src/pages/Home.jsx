import { Link } from "react-scroll";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import Main from "../components/Main";
import Learn from "../components/Learn";
import Safety from "../components/Safety";
import Support from "../components/Support";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import LogInPopUp from "../components/LogInPopUp";
function Home() {
  const { showButton } = useScrollToTop();
  const { showLogInPopUp } = useApp();
  const { onSetIsAuthenticated } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      onSetIsAuthenticated(true);
    }
  }, [onSetIsAuthenticated]);
  return (
    <div>
      <Main />
      <Learn />
      <Safety />
      <Support />
      <HowItWorks />
      <Footer />
      {showButton && (
        <Link
          to="main"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="bg-red-400 p-2 w-12 h-12 fixed rounded-full right-4 bottom-8 aspect-square flex items-center justify-center cursor-pointer text-3xl hover:bg-red-500 transition-all delay-[50ms] hover:font-bold"
        >
          &uarr;
        </Link>
      )}
      {showLogInPopUp && <LogInPopUp />}
    </div>
  );
}

export default Home;
