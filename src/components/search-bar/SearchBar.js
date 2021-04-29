import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar(props) {
    return (
        <div className='app-search'>
            <div style={{display: props.hide ? 'none' :  'block' }} >
                <input className='app-search__input'/>
                <button className="app-search__button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>
    );
}

export default SearchBar;