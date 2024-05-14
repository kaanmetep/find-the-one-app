function DashboardSidebarNav() {
  return (
    <div>
      <div className="flex justify-center">
        <img src="/minilogo.png" alt="Logo" className="sm:w-28 w-12" />
      </div>
      <ul className="flex gap-4 font-bold justify-center">
        <li className=" border-red-400 border-b-2 pb-1 cursor-pointer hover:border-transparent hover:text-slate-500 transition-all delay-[50ms]">
          Matches
        </li>

        <li className=" border-red-400 border-b-2 pb-1 cursor-pointer hover:border-transparent hover:text-slate-500 transition-all delay-[50ms]">
          Chat
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebarNav;
