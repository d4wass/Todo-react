import React, { useState } from "react";
import styles from "./Header.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AppContext from "../../context";
import { ReactComponent as Home } from "../../assets/home-solid.svg";
import { ReactComponent as Add } from "../../assets/plus-solid.svg";

const Header = () => {
  // const [searchValue, setSearchValue] = useState("");
  // const handleSearch = (event) => setSearchValue(event.target.value);
  return (
    <AppContext.Consumer>
      {(context) => (
        <>
          <div className={styles.wrapper}>
            <div className={styles.menu}>
              <Button showMenu={context.showMenu} menu />
              <Button link="/">
                <Home />
              </Button>
              <div className={styles.headerInput}>
                <Input
                  onChange={context.handleSearch}
                  value={context.searchValue}
                >
                  Search
                </Input>
              </div>
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
};

export default Header;
