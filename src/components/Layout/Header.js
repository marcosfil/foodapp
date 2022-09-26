import { Fragment } from "react";

import mealsImage from "../../assets/meals2.jpg";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A woman eating food" />
      </div>
    </Fragment>
  );
};

export default Header;
