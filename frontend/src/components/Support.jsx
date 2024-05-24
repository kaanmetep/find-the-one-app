import SectionHeading from "./SectionHeading";

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
      <div className="flex justify-center mt-2 gap-2">
        <a href="https://github.com/kaanmetep" target="_blank">
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
        <a href="mailto:kaanpmete@gmail.com">
          <ion-icon name="mail-outline" size="large"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default Support;
