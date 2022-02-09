import './Cart.css';

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';

export const Cart = () => {
    const { addItem, removeItem, cart } = useContext(CartContext)

    const getTotal = () => {
        let total = 0;
        if (cart.length > 0)
            cart.forEach(element => total += element.quantity);

        return total;
    }

    const getCartItems = () => {
        const getTotalItem = (price, quantity) => price * quantity;
        return cart.map((element, key) =>
            <div key={key}>
                <section key={key}  className='cart-item'>
                    <img src={element.item.pictureUrl} alt="Imagen " />
                    <hr />
                    <section className='cart-detail'>
                        <h4>{element.item.title}</h4>
                        <p>{element.item.description}</p>
                    </section>
                    <section className='buttons'>
                        <button className="add" onClick={() => addItem(element.item)}> + </button>
                        <ItemCount id={element.item.id} />
                        <button className="remove" onClick={() => removeItem(element.item.id)}> - </button>
                    </section>
                    <p className='item-price'>$ {getTotalItem(element.item.price, element.quantity)}</p>
                </section>
                <hr className='divider' />
            </div>
        )

    }

    const getTotalPrice = () => {
        let total = 0;
        if (cart.length > 0)
            cart.forEach(element => total += (element.item.price * element.quantity));
        return total;
    }

    return (
        <div className='container'>
            <section className='cart'>
                <section className='cart-header'>
                    <h3>Carrito{`(${getTotal()})`}</h3>
                    <hr />
                </section>

                <section className='cart-body'>
                    {
                        cart.length > 0 && getCartItems()
                    }
                    <NavLink to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {<button className="add-product" type='submit'> + Agregar Productos </button>}
                    </NavLink>
                </section>

                <section className='cart-footer'>
                    <section className='cart-total'>
                        <h4>Domicilio</h4>
                        <p className='item-price'>Total: $ {getTotalPrice()} </p>
                    </section>
                    <section className='cart-payment'>
                        <NavLink to={`/payment`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button className="payment" disabled={cart.length === 0 ? true : false}> PAGAR </button>
                        </NavLink>
                    </section>
                </section>
            </section>
        </div>
    )
};
