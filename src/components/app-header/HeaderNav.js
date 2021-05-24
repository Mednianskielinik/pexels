import './appHeader.css';
import React, {useState, useEffect} from 'react';
import HeaderLogo from "./HeaderLogo";
import SearchBar from "../search-bar/SearchBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';


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
            <a href="/home"><HeaderLogo/></a>
            <SearchBar hide={hideSearch} width='647' text='Поиск бесплатных изображений'/>
            <nav>
                <a href="/search">Найти фото</a>
                <a href="/narwhal">Лицензия</a>
                <a href="/whale">Загрузить</a>
            </nav>
            <a><FontAwesomeIcon icon={faEllipsisH}/></a>
            <button className='app-button'>Присоединиться</button>
        </div>
    );
}

export default HeaderNav;