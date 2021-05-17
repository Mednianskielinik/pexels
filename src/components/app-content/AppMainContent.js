import React, {useState, useEffect} from 'react';
import './appContent.css'
import ImageColumn from "./ImageColumn";
import photoData from "../app-data/photoData";

function AppMainContent(props) {
    const [images, setImagesArray] = useState(photoData)
    let arrayIndex = 0;
    let columnImages = [[],[],[]];

    if (!images.length) {
        fetch("https://api.pexels.com/v1/curated?per_page=290", {
            method: 'get',
            headers: new Headers({
                'Authorization': '563492ad6f91700001000001a43baf8658a94a48b210a1eacf5aae9b',
                // 'X-Ratelimit-Limit': 20000,
                // 'X-Ratelimit-Remaining': 19684,
                // 'X-Ratelimit-Reset': 1590529646,
            })
        }).then(response => response.json())
            .then(data => {
                setImagesArray(data.photos)
            })
    }

    images.forEach(item => {
        if (arrayIndex === 3) {
            arrayIndex = 0;
        }
        columnImages[arrayIndex].push(item);
        arrayIndex++;
    })

    const imageColumns = columnImages.map((item, index) => <ImageColumn key={index} images={item}/>)

    return (
        <div className='photos'>
            {imageColumns}
        </div>
    );
}

export default AppMainContent;