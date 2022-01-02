import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import productData from '../../data/products.json'
import { ItemList } from '../../components/ItemList/ItemList';
import { Loading } from '../../components/Loading/Loading';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            new Promise((res, rej) => {
                setTimeout(() => {
                    const productsArray = productData.length > 0 ? productData : []
                    setLoading(!loading);
                    res(productsArray)
                }, 2000)
            }).then((res) => {
                setProducts(res);
            })
        }
    }, [loading])

    return (
        <div className="container">
            <div className="greeting">
                <h1>{greeting}</h1>
            </div>
            <div>
                {loading ? <Loading /> : <ItemList products={products} />}
            </div>
        </div>
    )
}
