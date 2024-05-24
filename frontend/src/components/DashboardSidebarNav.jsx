function DashboardSidebarNav() {
  return (
    <div>
      <div className="flex justify-center">
        <img src="/minilogo.png" alt="Logo" className="sm:w-28 w-12" />
      </div>
      <p className="flex gap-4 font-bold justify-center">
        <span className=" border-red-400 border-b-2 pb-1 hover:border-transparent hover:text-slate-500 transition-all delay-[50ms]">
          Matches
        </span>
      </p>
    </div>
  );
}

export default DashboardSidebarNav;
