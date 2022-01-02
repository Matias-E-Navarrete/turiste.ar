import React from 'react'
import './EmptyComponent.css'
import notFoundImage from '../../assets/img/messages/notfound.png'
export const EmptyComponent = () => {
    return (
        <div className='empty-component-card'>
            <h2 className='empty-component-title'>We sorry.</h2>
            <img src={notFoundImage} alt='not-found' />
            <h4 className='empty-component-description'>We didnt find this page</h4>
        </div>
    )
}
