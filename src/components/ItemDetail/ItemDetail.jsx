import './ItemDetail.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';

export const ItemDetail = ({ id, title, description, price, pictureUrl }) => {
    const { addItem, removeItem, clear, isInCart } = useContext(CartContext)
    const item = {
        id,
        title,
        description,
        price,
        pictureUrl
    };
    return (
        <div className='detail'>
            <section className='detail-title'>
                <h2>Detalle de producto: {title}</h2>
                <hr />
            </section>
            <div className='detail-content'>
                <section className='detail-image'>
                    <img src={pictureUrl && require('../../assets/' + pictureUrl).default} alt="Paisaje" />
                </section>
                <section className='detail-description'>
                    <h3>{title}</h3>
                    <hr />
                    <p>{description}</p>
                    <h5 className='detail-price'>{price}</h5>
                    <section className='detail-operations'>

                        <div className='amount'>
                            <label>Días</label>
                            <input className='detail-count' type="number" />
                        </div>
                        <div className='detail-buttons'>
                            <button className="buy" onClick={() => addItem(item)}> Comprar </button>
                            <button className="add-cart" onClick={() => removeItem(item.id)}> Eliminar </button>
                        </div>

                        <NavLink to={`/cart`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className='cart-amount'>
                                <ItemCount id={id} />
                                <button className="btn-finish" type='submit'> Terminar Compra </button>
                            </div>
                        </NavLink>
                    </section>
                </section>
            </div>
        </div >
    )
}
