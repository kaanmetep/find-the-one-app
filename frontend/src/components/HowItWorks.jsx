import SectionHeading from "./SectionHeading";
function HowItWorks() {
  return (
    <div className="container mx-auto px-4 mb-24" id="howitworks">
      <SectionHeading>How it works</SectionHeading>
      <div className="grid grid-cols-2 grid-rows-3 gap-y-6 mt-16">
        <div className="col-span-full md:col-span-1">
          <span className="text-2xl md:text-4xl block mb-3">
            <span className="bg-gradient-to-r from-red-50 to-red-300 px-2 mr-1 ">
              swipe right
            </span>
            someone you like
          </span>
          <p className="text-sm leading-6">
            In "Find The One," you can show interest in someone by swiping right
            on their profile. This action involves a simple gesture of sliding
            the profile card to the right, indicating that you're intrigued and
            would like to connect with that person. When both users swipe right
            on each other, it creates a mutual match.
          </p>
        </div>
        <div className=" md:row-start-2 md:col-start-2 col-span-full">
          <span className="text-2xl md:text-4xl block mb-3">
            get a
            <span className="bg-gradient-to-r from-red-50 to-red-300 px-2 ml-1">
              match
            </span>
          </span>
          <p className="text-sm leading-6">
            When you and another user both swipe right on each other's profiles
            in "Find The One," it results in a match. This mutual expression of
            interest signifies that both individuals are interested in each
            other. Once a match is made, users can start engaging with each
            other through messaging.
          </p>
        </div>
        <div className="md:row-start-3 md:col-span-1 col-span-full">
          <span className="text-2xl md:text-4xl block mb-3">
            <span className="bg-gradient-to-r from-red-50 to-red-300 px-2 mr-1">
              send
            </span>
            the first message
          </span>
          <p className="text-sm leading-6">
            After getting a match on "Find The One," the next step is sending
            the first message. This initial message is a crucial step to
            initiate conversation and make a connection with your match. Users
            can use this opportunity to introduce themselves, share common
            interests, or ask questions to get to know each other better.
          </p>
        </div>
      </div>
      <span></span>
    </div>
  );
}

export default HowItWorks;
