/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productData from '../../../data/products.json'
import { Loading } from '../../../components/Loading/Loading'
import { findByID } from '../../../utils/functions'
import { ItemDetail } from '../../../components/ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const getItem = () => findByID(productData, id);


    useEffect(() => {
        if (loading) {
            new Promise((res, rej) => {
                setTimeout(() => {
                    const productDetail = productData.length > 0 ? getItem() : null
                    setLoading(!loading);
                    res(productDetail)
                }, 2000)
            }).then((res) => {
                setProduct(res);
            })
        }
    }, [loading, id])
    return (
        <div className='container'>
            {loading ? <Loading /> : <ItemDetail {...product} />}
        </div>
    )
}
