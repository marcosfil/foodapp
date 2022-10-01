import { Fragment } from "react";

import mealsImage from "../../assets/meals2.jpg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A woman eating food" />
      </div>
    </Fragment>
  );
};

export default Header;
