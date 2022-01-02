import React from 'react'
import { NavLink } from 'react-router-dom';
import './Item.css';
export const ItemComponent = ({ id, title, description, price, pictureUrl }) => {


    return (

        <div className='card' >
            <NavLink to={`item/${id}`} style={{ textDecoration: 'none', color:'inherit'}}>
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
            </NavLink>
        </div >
    )
}
