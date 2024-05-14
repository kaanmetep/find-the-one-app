import { Link } from "react-router-dom";
function MainLogo() {
  return (
    <Link className="flex items-center" to="/">
      <img
        src="minilogo.png"
        alt="Find the one main logo"
        className=" w-20 h-20"
      />
      <div className="ml-[-10px]">
        <h1 className="text-center lg:text-4xl text-2xl text-red-400">
          find the one
        </h1>
        <h2 className="text-center text-xs text-red-400">find your soulmate</h2>
      </div>
    </Link>
  );
}

export default MainLogo;
