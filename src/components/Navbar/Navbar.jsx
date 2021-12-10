import './Navbar.css';
import React from 'react';
import image from '../../assets/img/logos/logo-transparent.png';
import { navbarRoutes } from '../../utils/navbarRoutes';

export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img className='logo-img' src={image} alt="logotipo" />
                <ul className='navbar-list' style={{ listStyle: 'none' }}>
                    {navbarRoutes.map(menu =>
                        menu.component !== null ?
                            menu.component :
                            <li> <a href={menu.link} >{menu.name}</a></li>
                    )}
                </ul>
            </nav>
        </>
    )
}
