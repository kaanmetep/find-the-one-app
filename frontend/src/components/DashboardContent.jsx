import { Outlet, useLocation } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import FilterAgePopUp from "./FilterAgePopUp";
import UserProfileCard from "./UserProfileCard";

function DashboardContent() {
  const { showFilterAge } = useApp();
  const { pathname } = useLocation();

  if (pathname === "/dashboard")
    return (
      <div className="flex flex-col items-center mt-8 h-full gap-8 justify-self-start">
        <div className=" relative sm:h-[400px] h-[300px] sm:w-56 w-56 ">
          <UserProfileCard />
        </div>

        {showFilterAge && <FilterAgePopUp />}
      </div>
    );

  return <Outlet />;
}

export default DashboardContent;
