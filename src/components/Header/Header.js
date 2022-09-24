import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = (props) => {
  return (
    <header>
      <div className={style.headerLogoBlock}>
        <Link to="/">
          <img src="./img/logo.png" className={style.headerLogo} alt="logo" />
        </Link>
        <div className={style.headerLogoText}>
          <h3>React Sneakers</h3>
          <p>Best shop</p>
        </div>
      </div>
      <ul className={style.headerMenu}>
        <li onClick={props.onClickCart}>
          <img src="./img/cart.svg" />
          <span>1205 uah</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="./img/favourite.svg" />
          </Link>
        </li>
        <li>
          <img src="./img/user.svg" />
        </li>
      </ul>
    </header>
  );
};
