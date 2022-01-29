import './ItemCount.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ItemCount = ({ id }) => {
    const { cart } = useContext(CartContext)
    const getQuantity = () => {
        const itemFound = cart.find(element => element.item.id === id)
        return itemFound ? itemFound.quantity : 0
    }
    return (
        <p className='counter'>
            {cart.length > 0 ? getQuantity():0}
        </p>
    )
}
