import React from "react";
import styles from "modules/header/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faQuestionCircle,
  faCog,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "modules/shared/Avatar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.navBarIconContainer}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.fuseSearch}>
          <div className={styles.searchContainer}>
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            <input type="text" placeholder="Search your mail, tasks & notes" />
          </div>
        </div>
        <div className={styles.rightSideToolBar}>
          <div className={styles.focusModeContainer}>
            <div style={{ padding: "0.3125rem 0.625rem" }}>
              <FontAwesomeIcon icon={faCrosshairs} />
            </div>
            <select>
              <option>Focus mode</option>
            </select>
          </div>
          <div className={styles.iconToolbarContainer}>
            <FontAwesomeIcon
              className={styles.toolbarIcon}
              icon={faQuestionCircle}
            />
            <FontAwesomeIcon className={styles.toolbarIcon} icon={faCog} />
          </div>
          <Avatar
            src="https://robohash.org/consecteturenimpariatur.jpg?size=50x50&set=set1"
            alt="Myself"
            customClass={styles.headerAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
