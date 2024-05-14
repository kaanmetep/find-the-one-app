import Header from "./Header";
import MainContent from "./MainContent";
function Main() {
  return (
    <div
      className="main h-screen bg-gradient-to-r from-red-50 to-red-300 mb-12"
      id="main"
    >
      <Header />
      <MainContent />
    </div>
  );
}

export default Main;
