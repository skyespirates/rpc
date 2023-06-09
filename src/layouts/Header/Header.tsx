import { RiMoonFill, RiSunFill, RiGithubFill } from "react-icons/ri";
import "./style.css";
const Header = () => {
  const icon = true;
  return (
    <header className="header">
      <div className="header__item">
        <a href="#" className="header__logo">
          RPC
        </a>
        <button className="change-theme">
          {icon ? <RiMoonFill /> : <RiSunFill />}
        </button>
      </div>
      <a
        href="https://github.com/skyespirates/rpc"
        target="_blank"
        className="header__github"
      >
        <RiGithubFill />
      </a>
    </header>
  );
};

export default Header;
