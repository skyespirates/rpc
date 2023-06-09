import { RiMoonFill, RiSunFill, RiGithubFill } from "react-icons/ri";
import "./style.css";
import { useState } from "react";
const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const body = document.querySelector<HTMLBodyElement>("body");
  const handleClick = () => {
    body?.classList.toggle("dark-theme");
    const dark = body?.classList.contains("dark-theme")!;
    setIsDark(dark);
  };
  return (
    <header className="header">
      <div className="header__item">
        <a href="#" className="header__logo">
          RPC
        </a>
        <button onClick={handleClick} className="change-theme">
          {isDark ? <RiMoonFill /> : <RiSunFill />}
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
