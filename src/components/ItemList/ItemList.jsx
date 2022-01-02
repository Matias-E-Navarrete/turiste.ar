import React from 'react'
import './ItemList.css'
import { ItemComponent } from '../Item/Item'

export const ItemList = ({products}) => {
    const renderItems = () => {
        return products.map((item, key) => <ItemComponent key={key} {...item} />)
    }
    return (
        <>
            <h2 className='title-category'>Destacados</h2>
            <hr />
            <br />
            {
                <div className='container-list'>
                    {renderItems()}
                </div>
            }
        </>
    )
}
