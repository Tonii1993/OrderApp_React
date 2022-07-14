import React, {Fragment} from "react";

import styles from "./Header.module.css";
import imageMeals from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


// split into 2 components the header section
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food Order App In React</h1>
        <HeaderCartButton onClick={props.onShownCart}/>
      </header>
      
      <div className={styles['main-image']}>
        <img src={imageMeals} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
