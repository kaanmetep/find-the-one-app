import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InputElement from "./InputElement";
import Button from "../components/Button";
import Spinner from "./Spinner";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import { resizeFile, dataURItoBlob } from "../utils";
function OnboardingContent() {
  const [newUser, setNewUser] = useState({
    email: "",
    hashedPassword: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "man",
    genderPreference: "woman",
    about: "",
    instagramUsername: "",
    photo: null,
  });
  const handleSetNewUser = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      handleImage(name, value, e);
    } else {
      setNewUser({
        ...newUser,
        [name]: value,
      });
    }
  };
  const { signup, signUpError, isAuthenticated, isLoading } = useAuth();
  const { onSetShowLogInPopUp } = useApp();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
      onSetShowLogInPopUp(false);
    }
  }, [isAuthenticated, navigate, onSetShowLogInPopUp]);
  const handleImage = async (name, value, e) => {
    let file = e.target.files[0];
    const resizedImage = await resizeFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewUser({ ...newUser, [name]: e.target.result });
      console.log(e.target.result);
    };
    reader.readAsDataURL(dataURItoBlob(resizedImage));
  };
  return (
    <div className="container mx-auto mt-12 px-6 lg:px-2 mb-16">
      <h2 className="text-2xl italic uppercase font-bold text-center">
        Create Account
      </h2>
      <form action="" className="mt-8 grid grid-cols-2 gap-y-6 gap-x-12 pr-6">
        <div className="flex flex-col gap-6 justify-self-center">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email">E-mail</label>
            <InputElement
              value={newUser.email}
              onChange={handleSetNewUser}
              name="email"
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="password">Password</label>
            <InputElement
              type="password"
              name="hashedPassword"
              value={newUser.hashedPassword}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="password">Re-enter password</label>
            <InputElement
              type="password"
              name="confirmPassword"
              value={newUser.confirmPassword}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">First name</label>
            <InputElement
              name="firstName"
              value={newUser.firstName}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Last name</label>
            <InputElement
              name="lastName"
              value={newUser.lastName}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">Birth Date</label>
            <InputElement
              type="date"
              name="birthDate"
              value={newUser.birthDate}
              onChange={handleSetNewUser}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start col-start-2 row-start-1 gap-2">
            <label htmlFor="gender">Gender</label>
            <select
              id=""
              className="shadow-lg border-2 border-red-100 px-2 rounded-md "
              name="gender"
              value={newUser.gender}
              onChange={handleSetNewUser}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </div>
          <div className="flex flex-col items-start col-start-2 row-start-2 gap-2">
            <label htmlFor="firstname">Show me</label>
            <select
              id=""
              className="shadow-lg border-2 border-red-100 px-2 rounded-md "
              name="genderPreference"
              value={newUser.genderPreference}
              onChange={handleSetNewUser}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">About me</label>
            <InputElement
              placeholder="I love dogs..."
              py={4}
              name="about"
              value={newUser.about}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Instagram Username</label>
            <InputElement
              name="instagramUsername"
              value={newUser.instagramUsername}
              onChange={handleSetNewUser}
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start  gap-2">
              <label htmlFor="lastname">Photo</label>
              <InputElement
                name="photo"
                onChange={handleSetNewUser}
                type="file"
                accept="image/*"
              />
            </div>
            {newUser.photo && (
              <img
                src={newUser.photo}
                alt="User Photo"
                className="w-36 h-36 rounded-md"
              />
            )}
          </div>
          <div className="mt-1">
            {isLoading ? (
              <Spinner />
            ) : (
              <Button
                bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
                textcolor="text-white"
                onClick={(e) => {
                  e.preventDefault();
                  signup();
                }}
                disabled={isLoading}
              >
                Submit
              </Button>
            )}

            <button
              className="mt-6 border-b-2 border-b-black hover:text-slate-400 hover:border-b-transparent text-sm italic block"
              onClick={() => {
                navigate("/");
                onSetShowLogInPopUp(true);
              }}
            >
              Do you already have an account?
            </button>
          </div>
        </div>
      </form>
      <p className="mt-6 text-center uppercase text-red-600 font-semibold">
        {signUpError && signUpError}
      </p>
    </div>
  );
}

export default OnboardingContent;
