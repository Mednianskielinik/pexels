import React, {useState, useEffect} from 'react';
import './AppContent.css'
import themesData from "../app-data/themesData";
import ImageCard from "./ImageCard";

function AppMainContent() {
    const [images, setImagesArray] = useState(themesData)
    const imageCards = images.map(item => <ImageCard key={item.id} item={item}/>)

    useEffect(() => {
        fetch("https://api.pexels.com/v1/curated?per_page=5", {
            method: 'get',
            headers: new Headers({
                'Authorization': '563492ad6f91700001000001a43baf8658a94a48b210a1eacf5aae9b',
                'X-Ratelimit-Limit': 20000,
                'X-Ratelimit-Remaining': 19684,
                'X-Ratelimit-Reset': 1590529646,
            })
        }).then(response => response.json())
            .then(data => {
                setImagesArray(data.photos)
            })
    });

    return (
        <div className='photos'>
            {imageCards}
        </div>
    );
}

export default AppMainContent;