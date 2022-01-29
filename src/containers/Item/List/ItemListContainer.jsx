import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import productData from '../../../data/products.json'
import { ItemList } from '../../../components/ItemList/ItemList';
import { Loading } from '../../../components/Loading/Loading';
import { getFirestore } from '../../../firebase/config';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (loading) {
            const db = getFirestore();
            const itemsCollection = db.collection('items')
            itemsCollection.get().then(value => {
                setLoading(!loading);
                const items = value.docs.map((e,key) => { return { ...e.data(), id: e.id } })
                setProducts([...items]);
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
