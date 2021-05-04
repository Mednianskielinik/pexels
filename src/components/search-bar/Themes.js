import React from 'react';
import './SearchBar.css';

function Themes(props) {
    return (
        <a className='theme'>
            <img className='theme-image' src={props.item.image}/>
            <div className='theme-name'>
                {props.item.title}
            </div>
        </a>
    );
}

export default Themes;