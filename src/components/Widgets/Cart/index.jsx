import React from 'react'
import './CartWidget.css'
export const CartWidget = ({ route = '/cart' }) => (
    <span>
        <a href={route}>
            <i className="fas fa-shopping-cart"></i> Carrito
        </a>
    </span>)