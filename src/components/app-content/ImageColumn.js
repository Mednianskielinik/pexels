import React from 'react';
import ImageCard from "./ImageCard";

function ImageColumn(props) {
    const imageCards = props.images.map(item => <ImageCard key={item.id} item={item}/>)

    return (
        <div className='photo-column'>
            {imageCards}
        </div>
    );
}

export default ImageColumn;