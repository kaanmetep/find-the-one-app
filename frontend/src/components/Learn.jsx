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
        When it comes to dating apps, you’ve got options: Badoo, Bumble, Hinge,
        Match, POF, OKCupid, and many more. It doesn’t matter if you want to
        find love, a date, or just have a casual chat, you still want to find an
        app that’s the right match for you. And it’s not always black and white
        — when you want to meet new people, your friends at Tinder can help you
        out with features designed to make the impossible possible.
        <br />
        <span className="block mt-4">
          Dating online just got easier. We won’t brag about being the best free
          site — we’ll let you decide for yourself by giving you Tinder at a
          glance.
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
