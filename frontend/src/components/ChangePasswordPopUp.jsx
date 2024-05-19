import { useOutsideClick } from "../hooks/useOutsideClick";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
import InputElement from "./InputElement";
function ChangePasswordPopUp({ onSetChangePasswordPopUp }) {
  useOutsideClick(onSetChangePasswordPopUp);
  const {
    updateUserPassword,
    response,
    onSetResponse,
    newPassword,
    newRePassword,
    onSetNewPassword,
    onSetNewRePassword,
    passwordChangeIsLoading,
  } = useUser();
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== newRePassword) {
      onSetResponse("Passwords are not the same!");
      return;
    }
    if (newPassword === "" || newRePassword === "") {
      onSetResponse("Please fill all the areas.");
      return;
    }
    updateUserPassword();
  };
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <form className="shadow-2xl bg-white px-20 pb-10 pt-4 rounded-md flex flex-col items-center gap-6 relative popup ">
        <div className="flex flex-col items-start  gap-2 mt-12">
          <label htmlFor="password">New Password</label>
          <InputElement
            type="password"
            value={newPassword}
            onChange={(e) => onSetNewPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start  gap-2">
          <label htmlFor="password">Re-enter password</label>
          <InputElement
            type="password"
            value={newRePassword}
            onChange={(e) => onSetNewRePassword(e.target.value)}
          />
        </div>
        <p className="text-red-600 uppercase italic text-semibold">
          {response}
        </p>
        {passwordChangeIsLoading ? (
          <Spinner />
        ) : (
          <button
            className="bg-black text-white py-1 px-4 rounded-md hover:bg-white hover:text-black transition-all delay-[50ms]"
            onClick={(e) => handleChangePassword(e)}
          >
            Change
          </button>
        )}
        <button
          className="absolute right-3 top-3 aspect-auto  text-slate-400  rounded-full text-lg flex items-center justify-center hover:text-slate-700 transition-all delay-[50ms] font-bold"
          onClick={() => {
            onSetChangePasswordPopUp(false);
          }}
        >
          X
        </button>
      </form>
    </div>
  );
}

export default ChangePasswordPopUp;
