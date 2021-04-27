import logo from './logo.svg'
import React from 'react';
import './AppHeader.css'
import {SearchBar} from "../SearchBar/SearchBar";

function AppHeader() {
    return (
        <header className="app-header">
            <img src={logo} alt="logo"/> Pexels
            <SearchBar></SearchBar>
            <a>Найти фото</a>
            <a>Найти фото</a>
            <a>Найти фото</a>
            <a>...</a>
            <button className='app-button'>Присоединиться</button>
        </header>
    );
}

export default AppHeader;