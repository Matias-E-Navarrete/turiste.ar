import './ItemCount.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ItemCount = (id) => {
    const { cart } = useContext(CartContext)

    console.log(id)
    console.log("cart", cart)
    const getQuantity = () => cart.find(i => i.item.id === id.id).quantity;

    return (
        <p className='counter'>
            {cart.length > 0 ? getQuantity() : 0}
        </p>
    )
}
