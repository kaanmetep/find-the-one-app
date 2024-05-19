import { Link } from "react-router-dom";
import Button from "./Button";
import Testimonials from "../components/Testimonials";
import SectionHeading from "./SectionHeading";
function Learn() {
  return (
    <div
      className="container mx-auto  flex flex-col items-center shadow-lg p-4 mb-24 rounded-lg pb-8 "
      id="learn"
    >
      <SectionHeading>
        So, Why Choose A Dating App Like Find the One?
      </SectionHeading>
      <p className="text-sm mb-8">
        In the realm of dating apps, the choices are vast and diverse. Whether
        you're seeking genuine connections, memorable dates, or simply enjoyable
        conversations, finding the ideal app is key. However, making the right
        choice can be nuanced — when you're ready to expand your social horizons
        and meet new people, "Find the One" stands out with innovative features
        designed to make meaningful connections a reality.
        <br />
        <span className="block mt-4">
          Dating online just got easier. We won’t brag about being the best free
          site — we’ll let you decide for yourself by giving you Find the One at
          a glance.
        </span>
      </p>
      <Testimonials />
      <Link to="onboarding">
        <Button bgcolor="bg-red-400">Create Account</Button>
      </Link>
    </div>
  );
}

export default Learn;
