import React from "react";
import styles from "./Header.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AppContext from "../../context";
import { ReactComponent as Home } from "../../assets/home-solid.svg";
import { ReactComponent as Add } from "../../assets/plus-solid.svg";

const Header = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <Button onClick={context.showMenu} menu />
            <Button link="/">
              <Home />
            </Button>
            <Input>Search</Input>
          </div>
          <div>
            <Button onClick={context.showModal}>
              <Add />
            </Button>
          </div>
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default Header;
