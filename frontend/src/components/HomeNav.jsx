import NavItem from "./NavItem";
function HomeNav() {
  return (
    <nav>
      <ul className="flex lg:gap-6 gap-4 text-black uppercase tracking-wide font-semibold text-xs lg:text-base">
        <NavItem to="learn">Learn</NavItem>
        <NavItem to="safety">Safety</NavItem>
        <NavItem to="support">Support</NavItem>
        <NavItem to="howitworks">How it works</NavItem>
      </ul>
    </nav>
  );
}

export default HomeNav;
