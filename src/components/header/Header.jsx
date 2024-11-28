import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
const Header = () => {
  const [ShowMenu, SetShowMenu] = useState(true);
  const TogleMenu = () => {
    SetShowMenu(!ShowMenu);
  };
  const location = useLocation();
  return (
    <div className={css.container}>

      <Link to="/" className={css.logo} >
        <img src={Logo} alt="Logo" />
        <span>amazon</span>
      </Link>
      <div className={css.right}>
        <div className={css.bars} onClick={TogleMenu}>
          <VscThreeBars />
        </div>

        <ul
          className={css.menu}
          style={{ display: ShowMenu ? "inherit" : "none" }}
        >
          <li>
            <Link to="/collections"> Collections</Link>
          </li>
          <li>
            <Link to="/brand">brands</Link>
          </li>
          <li>
            <Link to="/newItem">new</Link>
          </li>
          <li>
            <Link to="/sales">sales</Link>
          </li>
          <li>ENG</li>
        </ul>


      
        {location.pathname === "/collections" && (
          <input type="text" className={css.search} placeholder="Search...." />
        )}


        {/* <input type="text" className={css.search} placeholder="Search...." /> */}
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};
export default Header;
