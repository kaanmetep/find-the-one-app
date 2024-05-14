import MainLogo from "../components/MainLogo";
import OnboardingContent from "../components/OnboardingContent";
import Footer from "../components/Footer";
function Onboarding() {
  return (
    <div>
      <div className="border-b-2 border-b-slate-300">
        <MainLogo />
      </div>
      <OnboardingContent />
      <Footer />
    </div>
  );
}

export default Onboarding;
