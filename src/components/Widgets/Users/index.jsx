import React from 'react'
import './UserProfileWidget.css'
export const UserProfileWidget = ({ route = '/user-profile' }) =>
    <span>
        <a href={route}>
            <i className="fas fa-user"></i> Perfil
        </a>
    </span>