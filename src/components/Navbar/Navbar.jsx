import './Navbar.css';
import React from 'react';
import image from '../../assets/img/logos/logo-transparent.png';
import { Link } from '../Link/Link';
import { navbarRoutes } from '../../utils/navbar.routes'
import { CartWidget } from '../Widgets/Cart';
import { UserProfileWidget } from '../Widgets/Users';
export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img className='logo-img' src={image} alt="logotipo" />
                <ul className='navbar-list' style={{ listStyle: 'none' }}>
                    {navbarRoutes.map((menu, key) => <Link key={key} route={menu.route} name={menu.name} />)}
                    <CartWidget />
                    <UserProfileWidget />
                </ul>
            </nav>
        </>
    )
}
