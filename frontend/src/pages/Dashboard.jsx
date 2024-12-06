import DashboardSidebar from "../components/DashboardSidebar";
import DashboardMain from "../components/DashboardMain";

function Dashboard() {
  return (
    <div className="grid sm:grid-cols-[1.1fr,4fr] grid-rows-[1fr,2.5fr] sm:grid-rows-1 h-screen overflow-hidden sm:gap-x-4">
      <DashboardSidebar />
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
