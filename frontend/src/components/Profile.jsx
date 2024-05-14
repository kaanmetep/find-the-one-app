import InputElement from "./InputElement";
import Button from "./Button";
function Profile() {
  return (
    <div className="mt-12 h-full flex items-center flex-col  ">
      <h2 className="text-center uppercase tracking-widest pb-2 font-semibold border-b-2 border-black">
        Profile
      </h2>
      <form action="" className="mt-8 grid grid-cols-2 gap-y-6 gap-x-12">
        <div className="flex flex-col gap-6 justify-self-center">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email">E-mail</label>
            <InputElement disabled={true} />
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
        </div>
        <div className="flex flex-col gap-6">
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
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
