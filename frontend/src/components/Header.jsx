import MainLogo from "../components/MainLogo";
import HomeNav from "../components/HomeNav";
import Button from "../components/Button";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { onSetShowLogInPopUp } = useApp();
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:pl-2 lg:px-8 py-4 justify-center sticky z-50 top-0 bg-gradient-to-r from-red-50 to-red-300">
      <MainLogo />
      <HomeNav />
      <div className="lg:ml-auto">
        {isAuthenticated ? (
          <div className="flex flex-col items-center">
            <p className="text-xl">Welcome back!</p>
            <Button bgcolor="bg-red-400" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </Button>
            <p
              onClick={() => {
                logout();
              }}
              className="mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </p>
          </div>
        ) : (
          <Button
            onClick={() => {
              onSetShowLogInPopUp(true);
            }}
          >
            Log in
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
