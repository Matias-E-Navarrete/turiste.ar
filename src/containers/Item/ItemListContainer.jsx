import React from 'react';
import './ItemListContainer.css';
import { ItemList } from '../../components/ItemList/ItemList';

export const ItemListContainer = ({ greeting }) => {
   
    
    return (
        <div className="container">
            <div className="greeting">
                <h1>{greeting}</h1>
            </div>
            <div>
                {
                    < ItemList />
                }
            </div>
        </div>
    )
}
