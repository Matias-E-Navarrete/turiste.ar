import React from 'react'
import './Loading.css';
import imageSVG from '../../assets/img/logos/montains.svg';
export const Loading = () => {
    return (
        <div className='loader'>
            <span className='center'>
                <img
                    className='loading-img'
                    src={imageSVG}
                    alt='Loading'
                    data-no-lazy='1'
                />
            </span>

        </div>
    )
}
