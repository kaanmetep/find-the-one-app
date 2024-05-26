import { useOutsideClick } from "../hooks/useOutsideClick";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
function DeleteAccountPopUp({ onSetDeleteAccountPopUp }) {
  useOutsideClick(onSetDeleteAccountPopUp);
  const { deleteUser, isLoading } = useUser();
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
      <div className="shadow-2xl bg-white px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative popup ">
        <p className="mt-4">Do you really want to delete your account?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="mt-6 flex gap-12">
            <button
              className="bg-black text-white py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all delay-[50ms]"
              onClick={() => {
                onSetDeleteAccountPopUp(false);
                deleteUser();
              }}
            >
              Yes
            </button>
            <button
              className="bg-black text-white py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all delay-[50ms]"
              onClick={() => {
                onSetDeleteAccountPopUp(false);
              }}
            >
              No
            </button>
          </div>
        )}
        <button
          className="absolute right-3 top-3 aspect-auto  text-slate-400  rounded-full text-lg flex items-center justify-center hover:text-slate-700 transition-all delay-[50ms] font-bold"
          onClick={() => {
            onSetDeleteAccountPopUp(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default DeleteAccountPopUp;
