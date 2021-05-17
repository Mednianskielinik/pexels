import React, {useState, useEffect} from 'react';
import './appHeader.css'
import HeaderNav from "./HeaderNav";
import HeaderContent from "./HeaderContent";

function AppHeader() {
    return (
        <header className='app-header'>
            <div className='header-background'>
                <img src='img/pexels-photo-4334250.jpeg'/>
            </div>
            <HeaderNav/>
            <HeaderContent/>
        </header>
    );
}

export default AppHeader;