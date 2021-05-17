import React, {useState} from 'react';
import ReactImageMagnify from "react-image-magnify";
import './modal.css'

function ImageModal(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" id="modal">
            <div className='modal_content'>
                <div className="content">
                    <div className='modal_image'>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: props.img.large,
                            },
                            largeImage: {
                                src: props.img.large2x,
                                width: 1200,
                                height: 1800
                            },
                            isActivatedOnTouch: false,
                            enlargedImagePosition: 'over'
                        }} />
                    </div>
                </div>
            </div>
            <button className='modal_exit_button' onClick={props.onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </button>
        </div>
    );
}

export default ImageModal;