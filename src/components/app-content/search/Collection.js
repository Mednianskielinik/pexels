import React, {useState, useEffect} from 'react';
import '../appContent.css';

function Collection(props) {

    return (
        <li className='collection-card'>
            <div className="main-image">
                <img width={'360px'} height={'250px'} src={props.collection.photos.big}/>
            </div>
            <div className="sub-images">
                <div className="sub-images__image">
                    <img width={'90px'} height={'65px'} src={props.collection.photos.small1}/>
                </div>
                <div className="sub-images__image">
                    <img width={'90px'} height={'65px'} src={props.collection.photos.small2}/>
                </div>
                <div className="sub-images__image">
                    <img width={'90px'} height={'65px'} src={props.collection.photos.small3}/>
                </div>
                <div className="sub-images__image">
                    <img width={'90px'} height={'65px'} src={props.collection.photos.small4}/>
                </div>
            </div>
            {props.collection.name}
        </li>
    );
}

export default Collection;