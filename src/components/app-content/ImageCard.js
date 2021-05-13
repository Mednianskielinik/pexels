import React from 'react';

function ImageCard(props) {
    return (
        <a className='photo-card'>
            <img className='photo-card_image' src={props.item.src.large}/>
            <div className='photo-card_overlay'>
                <div className='photo-card_author'>
                    <img className="photo-item__avatar" height="30" width="30" role="presentation"
                         data-overview-tooltip-pointer-element="true"
                         src="https://images.pexels.com/users/avatars/13144405/mathilde-langevin-119.png?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"/>
                        <span>{props.item.photographer}</span>
                </div>
            </div>
        </a>
);
}

export default ImageCard;