import DashboardSidebarNav from "./DashboardSidebarNav";
import Matches from "./Matches";
function DashboardSidebar() {
  return (
    <div className="h-full shadow-xl w-full lg:w-full p-4 overflow-auto text-xs sm:text-sm md:text-base">
      <DashboardSidebarNav />
      <Matches />
    </div>
  );
}

export default DashboardSidebar;
