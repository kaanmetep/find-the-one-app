import InputElement from "./InputElement";
import Button from "./Button";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import DeleteAccountPopUp from "./DeleteAccountPopUp";
import ChangePasswordPopUp from "./ChangePasswordPopUp";
import { resizeFile, dataURItoBlob } from "../utils";
function Profile() {
  const { userData, isLoading, handleUserData, updateUserInfo, response } =
    useUser();
  const [deleteAccountPopUp, setDeleteAccountPopUp] = useState(false);
  const [changePasswordPopUp, setChangePasswordPopUp] = useState(false);
  const [currUserInfo, setCurrUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleUserData();
      setCurrUserInfo({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        about: data.personelDetails.about,
        image: data.image,
      });
    };
    fetchData();
  }, []);

  const handleImage = async (name, value, e) => {
    let file = e.target.files[0];
    const resizedImage = await resizeFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setCurrUserInfo({ ...currUserInfo, [name]: e.target.result });
      console.log(e.target.result);
    };
    reader.readAsDataURL(dataURItoBlob(resizedImage));
  };
  const handleSetCurrUserInfo = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      handleImage(name, value, e);
    } else {
      setCurrUserInfo({
        ...currUserInfo,
        [name]: value,
      });
    }
  };
  return (
    <div className="mt-4 md:mt-12 h-full flex items-center flex-col  ">
      <div className="flex gap-2 mb-4">
        <button
          className="italic text-xs bg-black text-white px-2 py-1 rounded-md hover:text-black hover:bg-white transition-all delay-[50ms] mb-4"
          onClick={() => setChangePasswordPopUp(true)}
        >
          Change Password
        </button>
        <button
          className="italic text-xs bg-red-600 text-white px-2 py-1 rounded-md hover:text-black hover:bg-white transition-all delay-[50ms] mb-4"
          onClick={() => setDeleteAccountPopUp(true)}
        >
          Delete account
        </button>
      </div>
      <h2 className="text-center uppercase tracking-widest pb-2 font-semibold border-b-2 border-black">
        Profile
      </h2>
      {isLoading ? (
        <div className="mt-12">
          <Spinner />
        </div>
      ) : (
        <>
          {deleteAccountPopUp && (
            <DeleteAccountPopUp
              onSetDeleteAccountPopUp={setDeleteAccountPopUp}
            />
          )}
          {changePasswordPopUp && (
            <ChangePasswordPopUp
              onSetChangePasswordPopUp={setChangePasswordPopUp}
            />
          )}
          <form
            action=""
            className="mt-4 grid grid-cols-2  gap-y-4 gap-x-12 mb-8"
          >
            <div className="flex justify-center  gap-4 col-span-full justify-self-center">
              <img
                src={currUserInfo.image}
                alt="Profile Picture"
                className="w-32 rounded-lg"
              />
              <div className="flex flex-col gap-2 justify-center">
                <label htmlFor="" className="text-center italic">
                  Change your profile picture
                </label>
                <InputElement
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleSetCurrUserInfo}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-self-center">
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="email">E-mail</label>
                <InputElement
                  disabled={true}
                  value={userData.data?.email}
                  onChange={handleSetCurrUserInfo}
                  name="email"
                />
              </div>
              <div className="flex flex-col items-start  gap-2 ">
                <label htmlFor="lastname">About me</label>
                <InputElement
                  placeholder="I love dogs..."
                  py={4}
                  value={currUserInfo.about}
                  onChange={handleSetCurrUserInfo}
                  name="about"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start  gap-2">
                <label htmlFor="firstname">First name</label>
                <InputElement
                  value={currUserInfo?.firstName}
                  onChange={handleSetCurrUserInfo}
                  name="firstName"
                />
              </div>
              <div className="flex flex-col items-start  gap-2 ">
                <label htmlFor="lastname">Last name</label>
                <InputElement
                  value={currUserInfo?.lastName}
                  onChange={handleSetCurrUserInfo}
                  name="lastName"
                />
              </div>
            </div>
            <p className="text-center col-span-full mt-2 uppercase text-red-500 font-semibold">
              {isLoading ? <Spinner /> : response}
            </p>
            <div className=" col-span-full justify-self-center mt-2">
              <Button
                bgcolor="bg-gradient-to-r from-red-200 to-red-500 "
                textcolor="text-white"
                onClick={(e) => {
                  e.preventDefault();
                  updateUserInfo(currUserInfo);
                }}
              >
                Update
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Profile;
