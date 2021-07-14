import React from 'react';
import SearchBar from "./SearchBar";

function HomeBanner() {
    return (
        <div className='home-banner'>
            <div className='header-background'>
                <img src='img/pexels-photo-4334250.jpeg'/>
            </div>
            <div className="header-content">
                <h1 className="header-content__title">Лучшие бесплатные стоковые фото и видео от талантливых
                    авторов.</h1>
                <SearchBar text={'Ищите бесплатные фото и видео'} width='650'/>
            </div>
        </div>
    );
}

export default HomeBanner;