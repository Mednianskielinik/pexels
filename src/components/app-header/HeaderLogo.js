import './AppHeader.css';
import React from 'react';

function HeaderLogo() {
    return (
        <div className='container'>
            <img className='logo-image' src='/img/logo.svg' alt="logo"/>
            <span className="logo-text"> Pexels</span>
        </div>
    );
}

export default HeaderLogo;