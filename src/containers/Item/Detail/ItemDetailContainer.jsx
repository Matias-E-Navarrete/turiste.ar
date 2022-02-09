/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../../components/Loading/Loading'
// import { findByID } from '../../../utils/functions'
import { ItemDetail } from '../../../components/ItemDetail/ItemDetail'
import { getFirestore } from '../../../firebase/config'
import { EmptyComponent } from '../../../components/EmptyComponent/EmptyComponent'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [product, setProduct] = useState(null)
    // const getItem = () => findByID(productData, id);


    useEffect(() => {
        if (loading) {

            const db = getFirestore();
            const itemsCollection = db.collection('items');
            itemsCollection.get()
                .then(value => {
                    const items = value.docs.map((e, key) => { return { ...e.data(), id: e.id } })
                    const item = items.find(e => e.id === id)
                    if (!item) setNotFound(true)
                    setProduct(item)
                    setLoading(!loading);
                })
        }
    }, [loading, id])
    return (
        <div className='container'>
            {loading ? <Loading /> : notFound ? <EmptyComponent /> : <ItemDetail {...product} />}
        </div>
    )
}
