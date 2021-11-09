import React, {useState} from 'react';
import 'materialize-css';
import styles from "./Header.module.css"
import "../../index.css"
import {Icon, Navbar, NavItem} from "react-materialize";
const Header = () => {
    let navLinks = [
        {
            id: 0,
            name: 'HOME'
        },
        {
            id: 1,
            name: "GALLERY"
        },
        {
            id: 2,
            name: "CONTACTS"
        }]
    let [activeLink, setActiveLink] = useState(0)

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
                        key={link.id}
                        style={{cursor: "pointer"}}
                    >
                        {link.name}
                    </li>))}
                </ul>}
            >
                {navLinks.map(link => (
                    <NavItem
                        key={link.id}
                        onClick={() => setActiveLink(link.id)}
                        className={ activeLink === link.id ? styles.active:""}
                    >
                        {link.name}
                    </NavItem>
                ))}
            </Navbar>
    );
}

export default Header;