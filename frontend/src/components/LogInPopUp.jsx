import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputElement from "./InputElement";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import Spinner from "./Spinner";
import { useOutsideClick } from "../hooks/useOutsideClick";
function LogInPopUp() {
  const [currUser, setCurrUser] = useState({
    currUserEmail: "",
    currUserPassword: "",
  });
  const handleCurrUser = (e) => {
    const { name, value } = e.target;
    setCurrUser({ ...currUser, [name]: value });
  };
  const { onSetShowLogInPopUp } = useApp();
  const { login, isAuthenticated, loginError, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
      onSetShowLogInPopUp(false);
    }
  }, [isAuthenticated, navigate, onSetShowLogInPopUp]);
  useOutsideClick(onSetShowLogInPopUp);
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-white px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative popup ">
        <div className="flex flex-col items-center">
          <img src="minilogo.png" alt="logo" className="w-24 " />
          <SectionHeading>Log In</SectionHeading>
        </div>
        <form className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-[1fr,3fr] grid-cols-[1fr,2fr] items-center gap-2 ">
            <label htmlFor="name">E-mail:</label>
            <InputElement
              placeholder="Enter your e-mail"
              name="currUserEmail"
              value={currUser.currUserEmail}
              onChange={handleCurrUser}
            />
          </div>
          <div className="grid sm:grid-cols-[1fr,3fr] grid-cols-[1fr,2fr] items-center mb-2 gap-2 ">
            <label htmlFor="name">Password:</label>
            <InputElement
              type="password"
              placeholder="Enter your passsword"
              value={currUser.currUserPassword}
              onChange={handleCurrUser}
              name="currUserPassword"
            />
          </div>
          <Button
            bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
            textcolor="text-white"
            onClick={(e) => {
              e.preventDefault();
              login(currUser);
            }}
          >
            Log in
          </Button>
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <p className="text-center text-red-600 uppercase">{`${
              loginError && loginError + "!"
            }`}</p>
          )}
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
