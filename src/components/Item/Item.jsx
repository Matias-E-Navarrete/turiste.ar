import React from 'react'
import './Item.css';
export const ItemComponent = ({ id, title, description, price, pictureUrl }) => {

    return (
        
        <div className='card'>
            <div className='card-image'>
                <span className='center'>
                    <img src={pictureUrl} alt="Imagen producto" />
                </span>
            </div>
            <div className='card-header'>
                <h2>{title}</h2>
                <hr />
            </div>
            <div className='card-body'>
                <div className='product-detail'>
                    <p>{description}</p>
                    <p className='product-detail-price'>{price}</p>
                </div>
            </div>
        </div>
    )
}
