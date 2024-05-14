import InputElement from "./InputElement";
import Button from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
function OnboardingContent() {
  const { newUser, onHandleSetNewUser } = useContext(AuthContext);
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
            <InputElement type="password" />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="password">Re-enter password</label>
            <InputElement type="password" />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">First name</label>
            <InputElement />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Last name</label>
            <InputElement />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="firstname">Birth Date</label>
            <InputElement type="date" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start col-start-2 row-start-1 gap-2">
            <label htmlFor="gender">Gender</label>
            <select
              name=""
              id=""
              className="shadow-lg border-2 border-red-100 px-2 rounded-md "
            >
              <option value="man">Man</option>
              <option value="man">Woman</option>
              <option value="man">Other</option>
            </select>
          </div>
          <div className="flex flex-col items-start col-start-2 row-start-2 gap-2">
            <label htmlFor="firstname">Show me</label>
            <select
              name=""
              id=""
              className="shadow-lg border-2 border-red-100 px-2 rounded-md "
            >
              <option value="man">Man</option>
              <option value="man">Woman</option>
              <option value="man">Other</option>
            </select>
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">About me</label>
            <InputElement placeholder="I love dogs..." py={4} />
          </div>
          <div className="flex flex-col items-start  gap-2">
            <label htmlFor="lastname">Photo</label>
            <InputElement />
          </div>
          <div className="mt-6">
            <Button
              bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
              textcolor="text-white"
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
