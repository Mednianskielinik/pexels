import './appHeader.css';
import React, {useState, useEffect} from 'react';

function SecondNav(props) {
    return (
        <div className="second-nav">
            <a className={props.active==='home' ? 'tab active-tab' : 'tab'} href="/home">Главная</a>
            <a className={props.active==='search' ? 'tab active-tab' : 'tab'} href="/search">Найти</a>
            <a className='tab' href="/whale">Видео</a>
            <a className='tab' href="/whale">Лучшие фотографии</a>
            <a className='tab' href="/whale">Челенджи</a>
        </div>
    );
}

export default SecondNav;