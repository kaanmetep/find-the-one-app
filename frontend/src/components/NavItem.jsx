import { Link } from "react-scroll";
function NavItem({ children, to }) {
  return (
    <li className="border-b-2 border-b-transparent hover:border-b-3 hover:border-b-white hover:text-slate-600 transition-all delay-75 cursor-pointer">
      <Link to={to} spy={true} smooth={true} offset={-30} duration={500}>
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
