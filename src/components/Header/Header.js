import React from 'react';
import 'materialize-css';
import styles from "./Header.module.css"
import "../../index.css"
import {Icon, Navbar} from "react-materialize";
import {NavLink} from "react-router-dom";
import {routs} from "../../routs";

const Header = () => {

  return (
    <Navbar
      className={styles.navbar}
      alignLinks="right"
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      style={{textTransform: "uppercase"}}
      sidenav={
        <ul className={styles.mobileNavList + " browser-default"}>
          {routs.map(link => (
            <li
              key={link.path}
            >
              <NavLink
                to={link.path}
                style={{cursor: "pointer", textTransform: "uppercase", color: "#fff"}}
                activeClassName={styles.active}
              >
                {link.name}
              </NavLink>
            </li>))}
        </ul>}
    >
      {routs.map(link => (
        <NavLink key={link.path} to={link.path} activeClassName={styles.active}>
          {link.name}
        </NavLink>))
      }
    </Navbar>
  );
}

export default Header;