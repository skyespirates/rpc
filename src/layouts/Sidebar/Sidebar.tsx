import { NavLink } from "react-router-dom";
import "./style.css";
import links from "./Links";
const Sidebar = () => {
  return (
    <nav className="nav">
      <ul className="nav__item">
        {links.map((link, i) => (
          <li key={i} className="nav__link">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={link.to}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
