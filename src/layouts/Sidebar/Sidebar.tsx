import { NavLink } from "react-router-dom";
import "./style.css";
import links from "./Links";
type SidebarProps = {
  active: boolean;
};
const Sidebar = ({ active }: SidebarProps) => {
  return (
    <nav className={`nav ${active ? "active" : ""}`}>
      <ul className="nav__item">
        {links.map((link, i) => (
          <NavLink key={i} className="nav__link" to={link.to}>
            {link.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
