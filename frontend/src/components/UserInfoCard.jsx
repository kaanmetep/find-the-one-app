import { useState } from "react";
import { useUser } from "../hooks/useUser";
function UserInfoCard({ setSelectedUser, selectedUser, matchInfo }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { deleteMatch } = useUser();
  return (
    <>
      <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
        <div className="shadow-2xl bg-white px-16 pb-8 pt-4 rounded-md flex flex-col items-center relative  popup">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
              <p className="font-semibold uppercase tracking-wide">
                {selectedUser.firstName}
              </p>
              <p className="font-semibold">
                {Math.floor(
                  (new Date() - new Date(selectedUser.birthDate).getTime()) /
                    (365.25 * 24 * 60 * 60 * 1000)
                )}
              </p>
            </div>
            <p>{selectedUser.personelDetails.about}</p>
            <div className="flex justify-center items-center gap-2">
              <ion-icon name="logo-instagram"></ion-icon>
              <p>{selectedUser.personelDetails.instagramUsername}</p>
            </div>
            <button
              className="bg-red-400 text-white py-1 px-4 rounded-md font-semibold uppercase text-sm hover:bg-red-600 transition-all delay-[50ms]"
              onClick={() => setShowConfirmation(true)}
            >
              Delete this match
            </button>
          </div>
          <button
            className="absolute right-3 top-3 aspect-auto  text-slate-400  rounded-full text-lg flex items-center justify-center hover:text-slate-700 transition-all delay-[50ms] font-bold"
            onClick={() => setSelectedUser(null)}
          >
            X
          </button>
        </div>
      </div>
      {showConfirmation && (
        <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-[100]   inset-0 backdrop-blur-sm bg-opacity-50 ">
          <div className="shadow-2xl bg-white px-12 pb-10 pt-4 rounded-md flex flex-col items-center relative gap-4">
            <p className="mt-4">Do you really want to delete this match?</p>
            <div className="flex gap-4">
              <button
                className="bg-black text-white py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all delay-[50ms]"
                onClick={() => {
                  const obj = matchInfo.find(
                    (match) => match.matchedUser === selectedUser._id
                  );
                  deleteMatch(obj.matchId);
                  setShowConfirmation(false);
                  setSelectedUser(null);
                }}
              >
                Yes
              </button>
              <button
                className="bg-black text-white py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all delay-[50ms]"
                onClick={() => {
                  setShowConfirmation(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserInfoCard;
