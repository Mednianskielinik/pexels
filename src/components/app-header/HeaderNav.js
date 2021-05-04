import './AppHeader.css';
import React, {useState, useEffect} from 'react';
import HeaderLogo from "./HeaderLogo";
import SearchBar from "../search-bar/SearchBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'

function HeaderNav() {
    const [navType, setNavType] = useState('nav_default');
    const [hideSearch, setHideSearch] = useState(true)

    function listenScrollEvent(e) {
        if (window.scrollY > 200) {
            setNavType('nav_colored');
            setHideSearch(false);
        } else {
            setNavType('nav_default');
            setHideSearch(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    });

    return (
        <div className={navType + " app-nav"}>
            <HeaderLogo/>
            <SearchBar hide={hideSearch} width='647' text='Поиск бесплатных изображений'/>
            <a>Найти фото</a>
            <a>Лицензия</a>
            <a>Загрузить</a>
            <a><FontAwesomeIcon icon={faEllipsisH}/></a>
            <button className='app-button'>Присоединиться</button>
        </div>
    );
}

export default HeaderNav;