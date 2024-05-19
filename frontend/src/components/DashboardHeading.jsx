import DashboardNav from "./DashboardNav";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useApp } from "../hooks/useApp";
import { useUser } from "../hooks/useUser";
import { useLocation } from "react-router-dom";

function DashboardHeading() {
  const { handleUserData, userData, isLoading } = useUser();
  useEffect(() => {
    handleUserData();
  }, []);
  const { onSetShowFilterAge } = useApp();
  const { pathname } = useLocation();
  return (
    <div className="container mx-auto sm:px-4 ">
      <div className="p-1 sm:p-4 bg-gradient-to-r from-red-50 to-red-300 grid grid-rows-2 md:flex md:items-center md:justify-between rounded-md justify-items-center gap-y-1">
        {pathname === "/dashboard" && isLoading ? (
          <Spinner />
        ) : (
          <h2 className="md:text-xl font-semibold uppercase">
            <p>{`Welcome ${userData.data?.firstName}`}</p>
          </h2>
        )}
        {pathname === "/dashboard" && (
          <button
            className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all delay-[50ms] hover:text-slate-600 font-semibold text-sm md:text-base italic"
            onClick={() => onSetShowFilterAge(true)}
          >
            Filter Age
          </button>
        )}
        <DashboardNav />
      </div>
    </div>
  );
}

export default DashboardHeading;
