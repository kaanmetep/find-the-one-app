import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputElement from "./InputElement";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";
function LogInPopUp() {
  const { onSetShowLogInPopUp } = useContext(AppContext);
  const { userEmail, userPassword, onSetUserEmail, onSetUserPassword } =
    useContext(AuthContext);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup")) {
        onSetShowLogInPopUp(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  const navigate = useNavigate();
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-white px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative popup ">
        <div className="flex flex-col items-center">
          <img src="minilogo.png" alt="logo" className="w-24 " />
          <SectionHeading>Log In</SectionHeading>
        </div>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-[1fr,3fr] items-center gap-2">
            <label htmlFor="name">E-mail:</label>
            <InputElement
              placeholder="Enter your e-mail"
              value={userEmail}
              onChange={(e) => onSetUserEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-[1fr,3fr] items-center mb-2 gap-2">
            <label htmlFor="name">Password:</label>
            <InputElement
              type="password"
              placeholder="Enter your passsword"
              value={userPassword}
              onChange={(e) => onSetUserPassword(e.target.value)}
            />
          </div>
          <Button
            bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
            textcolor="text-white"
            onClick={(e) => {
              e.preventDefault();
              navigate("dashboard");
            }}
          >
            Log in
          </Button>
        </form>
        <button
          className="absolute right-3 top-3 aspect-auto  text-slate-400  rounded-full text-lg flex items-center justify-center hover:text-slate-700 transition-all delay-[50ms] font-bold"
          onClick={() => onSetShowLogInPopUp(false)}
        >
          X
        </button>
        <Link to="onboarding">
          <button
            className="mt-6 border-b-2 border-b-black hover:text-slate-400 hover:border-b-transparent"
            onClick={() => {
              onSetShowLogInPopUp(false);
            }}
          >
            Don't you have an account?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LogInPopUp;
