import SectionHeading from "./SectionHeading";
import InputElement from "./InputElement";
import Button from "./Button";
function Support() {
  return (
    <div
      className="container mx-auto  flex flex-col items-center shadow-lg p-12 pt-6 mb-24 rounded-lg bg-gradient-to-r from-red-50 to-red-300"
      id="support"
    >
      <div className="flex flex-col justify-center items-center">
        <img src="minilogo.png" alt="Logo" className="w-24 " />
        <SectionHeading>Contact with us</SectionHeading>
      </div>

      <form action="" className="flex flex-col gap-4">
        <div className="grid grid-cols-[1fr,3fr] gap-4 ">
          <label htmlFor="name">Name:</label>
          <InputElement placeholder="Enter your name" />
        </div>
        <div className="grid grid-cols-[1fr,3fr] gap-4">
          <label htmlFor="email">Email:</label>
          <InputElement placeholder="Enter your e-mail" />
        </div>
        <div className="grid grid-cols-[1fr,3fr] gap-4 mb-2">
          <label htmlFor="message" className="self-center">
            Your message:
          </label>
          <InputElement py={4} placeholder="Enter your message" />
        </div>
        <Button>Send</Button>
      </form>
    </div>
  );
}

export default Support;
