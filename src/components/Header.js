import React from 'react';
import 'materialize-css';
import {Icon, Navbar, NavItem} from "react-materialize";
const Header = () => {
    return (
        <Navbar
            style={{
                padding: "0 30px",
                backgroundColor: 'RGBA(26, 35, 126, 0.1)',
                position: 'absolute'
            }}

            alignLinks="right"
            brand={<a className="brand-logo" href="#">Where is ISS</a>}
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
            sidenav={<li>Custom node!</li>}
        >

            <NavItem href="">
                Getting started
            </NavItem>
            <NavItem href="components.html">
                Components
            </NavItem>
        </Navbar>
    );
};

export default Header;