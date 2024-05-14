import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import FilterAgePopUp from "./FilterAgePopUp";
import Advanced from "./Advanced";

function DashboardContent() {
  const { showFilterAge } = useContext(AppContext);
  const { pathname } = useLocation();

  if (pathname === "/dashboard")
    return (
      <div className="flex flex-col items-center mt-8 h-full gap-8 justify-self-start">
        <div className=" relative sm:h-[400px] h-[300px] sm:w-56 w-56 ">
          <Advanced />
        </div>

        {showFilterAge && <FilterAgePopUp />}
      </div>
    );

  return <Outlet />;
}

export default DashboardContent;
