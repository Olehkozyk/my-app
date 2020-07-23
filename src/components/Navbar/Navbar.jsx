import React, { Component }  from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.active}>
                Profile
            </NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>
                Dialogs
            </NavLink>
        </nav>
    )
}

export default Navbar;