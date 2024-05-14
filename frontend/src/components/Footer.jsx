import MainLogo from "./MainLogo";
function Footer() {
  return (
    <div className="border-top border-red-400 border-t-2 mb-4 pt-4 text-sm">
      <div className="container mx-auto px-4">
        <p className="text-center">
          The entire design of this website is my original creation, infused
          with insights from{" "}
          <a className="border-b-2" href="https://tinder.com/" target="_blank">
            Tinder.com
          </a>{" "}
          for specific design and content concepts.
        </p>
        <p className="text-center mt-2">No commercial motives intended.</p>
        <p className="text-center mt-2">© 2024 Kaan Mete Peksen</p>
        <div className="flex justify-center mt-2 gap-2">
          <a href="https://github.com/kaanmetep" target="_blank">
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
          <a href="mailto:kaanpmete@gmail.com">
            <ion-icon name="mail-outline" size="large"></ion-icon>
          </a>
        </div>
      </div>
      <img src="minilogo.png" alt="Logo" className="w-12 mx-auto" />
    </div>
  );
}

export default Footer;
