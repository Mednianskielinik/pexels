import React, {useEffect} from 'react';

function ImageTooltip(props) {
    var className = 'tooltip';
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    if (props.coordinateX > screenWidth/5*2) {
        className += ' left'
    }

    if (props.coordinateY < screenHeight/4) {
        className += ' bottom'
    }

    return (
        <div className={className}>
            <div className='photo-card_author tooltiptext'>
                <img className="photo-item__avatar" height="30" width="30"
                     data-overview-tooltip-pointer-element="true"
                     src="https://images.pexels.com/users/avatars/13144405/mathilde-langevin-119.png?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"/>
                <span className='name'>Name</span>
            </div>
        </div>
    );
}

export default ImageTooltip;