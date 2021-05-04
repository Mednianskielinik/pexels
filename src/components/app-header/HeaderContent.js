import './AppHeader.css';
import React, {useState, useEffect} from 'react';
import SearchBar from "../search-bar/SearchBar";

function HeaderContent() {
    return (
        <div className="header-content">
            <h1 className="header-content__title">Лучшие бесплатные стоковые фото и видео от талантливых авторов.</h1>
            <SearchBar text = {'Ищите бесплатные фото и видео'} width='650'/>
        </div>
    );
}

export default HeaderContent;