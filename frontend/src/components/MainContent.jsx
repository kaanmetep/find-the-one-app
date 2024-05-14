import Button from "./Button";
import { Link } from "react-router-dom";
function MainContent() {
  return (
    <div className="mt-40 container justify-center items-center mx-auto text-white font-extrabold flex flex-col lg:gap-6 gap-4">
      <h2 className="lg:text-[74px] text-5xl">Swipe Right</h2>
      <div className="flex justify-center">
        <Link to="onboarding">
          <Button bgcolor="bg-red-400">Create Account</Button>
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
