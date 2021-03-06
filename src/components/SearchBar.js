import React, { useState, useEffect, useRef } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import themesData from "./app-data/themesData";
import Themes from "./Themes";

function SearchBar(props) {
    const [showThemes, setShowThemes] = useState(false)
    const themeItems = themesData.map(item => <Themes key={item.id} item={item}/>)

    return (
        <div className='app-search' onBlur={() => setShowThemes(false)} onFocus={() => setShowThemes(true)} >
            <div style={{display: props.hide ? 'none' : 'flex', width: props.width + 'px'}}>
                <input placeholder={props.text} className='app-search__input'
                       style={{width: (props.width - 70) + 'px'}}/>
                <button className="app-search__button"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div className='app-search__themes'
                 style={{display: showThemes ? 'flex' : 'none', width: props.width - 30 + 'px'}}>
                <div className='themes-title'>Популярные темы</div>
                <div className='themes-content'>{themeItems}</div>
            </div>
        </div>
    );
}

export default SearchBar;