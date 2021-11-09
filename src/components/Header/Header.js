import React, {useState} from 'react';
import 'materialize-css';
import styles from "./Header.module.css"
import "../../index.css"
import {Icon, Navbar, NavItem} from "react-materialize";
const Header = () => {
    let navLinks = ['HOME', "GALLERY", "CONTACT"]
    let [activeLink, setActiveLink] = useState("HOME")

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
                sidenav={<ul className={styles.mobileNavList + " browser-default"}>
                    {navLinks.map(link => (
                    <li
                        key={Date.now()+1}
                        style={{cursor: "pointer"}}
                    >
                        {link}
                    </li>))}
                </ul>}
            >
                {navLinks.map(link => (
                    <NavItem
                        key={Date.now()}
                        onClick={() => setActiveLink(link)}
                        className={ activeLink === link ? styles.active:""}
                    >
                        {link}
                    </NavItem>
                ))}
            </Navbar>
    );
}

export default Header;