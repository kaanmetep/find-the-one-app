import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function DashboardNav() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <nav>
      <ul className="flex gap-4 font-semibold text-sm sm:text-base items-center">
        <Link to="/dashboard">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all delay-[50ms] hover:text-slate-600">
            Home
          </li>
        </Link>
        <Link to="profile">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all delay-[50ms] hover:text-slate-600">
            Profile
          </li>
        </Link>
        <Link to="statistics">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all delay-[50ms] hover:text-slate-600">
            View Statistics
          </li>
        </Link>
        <li
          onClick={() => {
            logout();
            navigate("/");
          }}
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
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav;
