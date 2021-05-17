import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "./modal/ImageModal";

function ImageCard(props) {
    const [like, setLike] = useState(false)
    const [modal, showModal] = useState(false)

    return (
        <div>
            <a className='photo-card'>
                <img onClick={() => {
                    showModal(true);
                }} className='photo-card_image' src={props.item.src.large}/>
                <div className='photo-card_overlay'>
                    <div className='photo-card_author'>
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
            <ImageModal img = {props.item.src} onClose={() => showModal(!modal)} show={modal}/>
        </div>
    );
}

export default ImageCard;