import React from 'react';

function ImageCard(props) {
    return (
        <a className='photo-card'>
            <img className='photo-card_image' src={props.item.src}/>
            <div className='photo-card_photographer'>
                {props.item.photographer}
            </div>
        </a>
    );
}

export default ImageCard;