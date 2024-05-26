import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function MainContent() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if (isAuthenticated) {
      alert("You already logged in. You'll be navigated to dashboard.");
      navigate("/dashboard");
    } else {
      navigate("/onboarding");
    }
  };
  return (
    <div className="mt-40 container justify-center items-center mx-auto text-white font-extrabold flex flex-col lg:gap-6 gap-4">
      <h2 className="lg:text-[74px] text-5xl">Swipe Right</h2>
      <div className="flex justify-center">
        <Button bgcolor="bg-red-400" onClick={handleClick}>
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default MainContent;
