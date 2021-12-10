import React from 'react'
import './CartWidget.css'
export const CartWidget = ({ route }) =>
    <span>
        <a href={route}>
            <i className="fas fa-shopping-cart"></i> Carrito
        </a>
    </span>