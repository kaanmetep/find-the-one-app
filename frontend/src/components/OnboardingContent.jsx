import InputElement from "./InputElement";
import Button from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function OnboardingContent() {
  const { newUser, onHandleSetNewUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-12 px-6 lg:px-2 mb-16">
      <h2 className="text-2xl italic uppercase font-bold text-center">
        Create Account
      </h2>
      <form action="" className="mt-8 grid grid-cols-2 gap-y-6 gap-x-12">
        <div className="flex flex-col gap-6 justify-self-center">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email">E-mail</label>
            <InputElement
              value={newUser.email}
              onChange={onHandleSetNewUser}
              name="email"
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="password">Password</label>
            <InputElement
              type="password"
              name="password"
              value={newUser.password}
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="password">Re-enter password</label>
            <InputElement
              type="password"
              name="confirmPassword"
              value={newUser.confirmPassword}
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">First name</label>
            <InputElement
              name="firstName"
              value={newUser.firstName}
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Last name</label>
            <InputElement
              name="lastName"
              value={newUser.lastName}
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">Birth Date</label>
            <InputElement
              type="date"
              name="birthDate"
              value={newUser.birthDate}
              onChange={onHandleSetNewUser}
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
              onChange={onHandleSetNewUser}
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
              onChange={onHandleSetNewUser}
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
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Photo</label>
            <InputElement
              name="photo"
              value={newUser.photo}
              onChange={onHandleSetNewUser}
            />
          </div>
          <div className="mt-6">
            <Button
              bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
              textcolor="text-white"
              onClick={(e) => {
                e.preventDefault();
                console.log(newUser);
                navigate("/dashboard");
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OnboardingContent;
