import React from 'react';
import photoData from "./app-data/photoData";

function ImageTooltip(props) {
    var className = 'tooltip';
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    if (props.coordinateY > screenHeight / 5 * 3) {
        className += ' tooltip-top'
    } else {
        className += ' tooltip-bottom'
    }
    if (props.coordinateX > screenWidth / 5 * 3) {
        className += '-left'
    } else {
        className += '-right'
    }

    return (
        <div className={className}>
            <div className='author tooltiptext'>
                <img className="photo-item__avatar" height="50" width="50"
                     data-overview-tooltip-pointer-element="true"
                     src="https://images.pexels.com/users/avatars/13144405/mathilde-langevin-119.png?auto=compress&amp;fit=crop&amp;h=90&amp;w=90"/>
                <span className='info'>
                    <span className='name'>Name</span>
                    <span className='followers'>814 подписчиков</span>
                </span>
                <button className='follow-button'>Подписаться</button>
                <div className='author-images'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default ImageTooltip;