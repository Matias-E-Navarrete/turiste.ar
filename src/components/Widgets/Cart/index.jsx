import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.css'

export const CartWidget = ({ route = '/cart' }) => {
    const { cart } = useContext(CartContext)
    const getTotal = () => {
        let total = 0;
        if (cart.length > 0)
            cart.forEach((element, key) => total += element.quantity);

        return total;
    }

    const getCartItems = () => {
        const getTotalItem = (price, quantity) => price * quantity;
        return cart.map((element, key) => {
            return (
                <>
                    <section className='cart-item'>
                        <h4>{element.item.title}</h4>
                        <hr />
                        <section className='cart-widget-detail'>
                            <img src={'/' + element.item.pictureUrl} alt="Imagen " width={'20%'} />
                            <section className='item'>
                                <p>Cantidad: {element.quantity}</p>
                                <p className='item-price'>$ {getTotalItem(element.item.price, element.quantity)}</p>
                            </section>
                        </section>
                    </section>
                    <br />
                    <hr className='divider' />
                </>
            )
        })
    }

    return (
        <div className="dropdown">
            <a href={route}>
                <i className="fas fa-shopping-cart"></i> Carrito ({getTotal()})
            </a>

            <div className="dropdown-content">
                {cart.length > 0
                    ? getCartItems()
                    : 'No hay productos en el carrito'
                }
            </div>
        </div>
    )
}