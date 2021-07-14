import React, {useState, useEffect} from 'react';
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';


function HeaderNav(props) {
    const [navType, setNavType] = useState(props.showSearch ? 'nav_colored' : 'nav_default');
    const [hideSearch, setHideSearch] = useState(!props.showSearch)

    function listenScrollEvent(e) {
        if (window.scrollY > 100 || props.showSearch) {
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
        <nav className={navType + " app-nav"}>
            <a href="/home"><HeaderLogo/></a>
            <SearchBar hide={hideSearch} searchText={props.searchText} width='647' text='Поиск бесплатных изображений'/>
            <a href="/search">Найти фото</a>
            <a href="/narwhal">Лицензия</a>
            <a href="/whale">Загрузить</a>
            <a><FontAwesomeIcon icon={faEllipsisH}/></a>
            <button className='app-button'>Присоединиться</button>
        </nav>
    );
}

export default HeaderNav;