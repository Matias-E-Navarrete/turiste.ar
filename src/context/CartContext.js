import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const foundProduct = cart.find(i => i.item.id === item.id);
        if (foundProduct) {
            foundProduct.quantity++;
            setCart([...cart])
        } else {
            setCart([...cart, { item: item, quantity: 1 }])
        }
        return cart;
    }

    const removeItem = (id) => {
        const elementFound = cart.find(i => i.item.id === id);
        if (elementFound) {
            if (elementFound.quantity > 1) {
                elementFound.quantity--;
                setCart([...cart])
            } else {
                setCart(cart.filter(item => item.item.id !== id));
            }
        }
        return cart;
    }

    const clear = () => { setCart([]); return cart }

    const isInCart = (id) =>
        (cart.find(i => i.item.id === id) !== undefined) ? true : false;


    return <CartContext.Provider value={{ cart, removeItem, addItem, clear, isInCart }}>
        {children}
    </CartContext.Provider>;
}