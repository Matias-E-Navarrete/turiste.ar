import React from 'react'
import './ItemDetail.css'
export const ItemDetail = ({ id, title, description, price, pictureUrl }) => {
    console.log('%cMyProject%cline:3%cpictureUrl', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', pictureUrl)
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
                        <form method='POST'>
                            <div className='amount'>
                                <label>Días</label>
                                <input className='detail-count' type="number" />
                            </div>
                            <div className='detail-buttons'>
                            <button className="buy" type='submit'> Comprar </button>
                            <button className="add-cart" type='submit'> Añadir al carrito </button>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        </div>
    )
}
