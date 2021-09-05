import style from "./menu.module.css";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { useState } from "react";
import cx from "classnames";
import Logo from "./logo";

const Menu: React.FC = () => {
  const [isOpen, setOpen] = useState<Boolean>(false);

  const menuClasses = cx({
    [style.show]: isOpen,
  });

  return (
    <div className={style.menuWrapper}>
      <Logo />
      <nav className={menuClasses}>
        <div className={style.leftMenu}>
          <a href="#home" className={style.active}>Find Jobs</a>
          <a href="#about">Upskill Yourself</a>
        </div>
        <div className={style.rightMenu}>
          <a href="#home">Post a Job</a>
          <a href="#about">Sign In</a>
        </div>
      </nav>
      <MenuIcon
        className={style.mobileMenuButton}
        onClick={() => setOpen(!isOpen)}
      />
    </div>
  );
};

export default Menu;
