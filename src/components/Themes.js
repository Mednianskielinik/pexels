import React from 'react';

function Themes(props) {
    return (
        <a href={"/search/"+props.item.title} className='theme'>
            <img className='theme-image' src={props.item.image}/>
            <div className='theme-name'>
                {props.item.title}
            </div>
        </a>
    );
}

export default Themes;