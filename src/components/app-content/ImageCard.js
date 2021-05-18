import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "./modal/ImageModal";
import ImageTooltip from "./ImageTooltip";

function ImageCard(props) {
    const [like, setLike] = useState(false)
    const [modal, showModal] = useState(false)
    const [tooltip, showTooltip] = useState(false)
    const [tooltipX, setTooltipX] = useState(0);
    const [tooltipY, setTooltipY] = useState(0);


    function getPosition(e) {
        var posx = 0;
        var posy = 0;

        if (e.pageX || e.pageY) {
            posx = e.pageX - window.scrollX;
            posy = e.pageY - window.scrollY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX - window.scrollX;
            posy = e.clientY -window.scrollY;
        }

        return {
            x: posx,
            y: posy,
        }
    }

    useEffect(() => {
        document.querySelectorAll('.photo-card_author').forEach(item => {
            item.addEventListener("mouseover", function (e) {
                setTooltipX(getPosition(e).x);
                setTooltipY(getPosition(e).y);
            });
            item.addEventListener("mouseout", function (e) {
            });
        })
    });
    return (
        <div>
            <a className='photo-card'>
                <img onClick={() => {
                    showModal(true);
                }} className='photo-card_image' src={props.item.src.large}/>
                <div className='photo-card_overlay'>
                    <div className='photo-card_author' onMouseOver={() => showTooltip(true)}
                         onMouseOut={() => showTooltip(false)}>
                        <img className="photo-item__avatar" height="30" width="30" role="presentation"
                             data-overview-tooltip-pointer-element="true"
                             src="https://images.pexels.com/users/avatars/13144405/mathilde-langevin-119.png?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"/>
                        <span className='name'>{props.item.photographer}</span>
                    </div>
                    <div className='photo-card_actions'>
                        <span className='action-button'><FontAwesomeIcon icon={faDownload}/></span>
                        <span className='action-button'><FontAwesomeIcon icon={faPlusCircle}/></span>
                        <span className='action-button' onClick={() => {
                            setLike(!like)
                        }}><FontAwesomeIcon icon={faHeart}/></span>
                    </div>
                </div>
                {like ? <span className='like'><FontAwesomeIcon icon={faHeart}/></span> : ''}
            </a>
            {tooltip ? <ImageTooltip coordinateX = {tooltipX} coordinateY = {tooltipY} key={props.item.id}/> : ''}
            <ImageModal img={props.item.src} onClose={() => showModal(!modal)} show={modal}/>
        </div>
    );
}

export default ImageCard;