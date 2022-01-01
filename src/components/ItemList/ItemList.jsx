import React, { useEffect, useState } from 'react'
import './ItemList.css'
import products from '../../data/products.json'
import { Loading } from '../Loading/Loading';
import { ItemComponent } from '../Item/Item'

export const ItemList = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            setTimeout(() => { setLoading(!loading); }, 2000)
        }
    }, [loading])

    const renderItems = () => {
        return products.map((item, key) => <ItemComponent key={key} {...item} />)
    }

    return (
        <>
            <h2 className='title-category'>Destacados</h2>
            <hr />
            <br />
            {loading ? <Loading /> :
                <div className='container-list'>
                    {renderItems()}
                </div>
            }
        </>
    )
}
