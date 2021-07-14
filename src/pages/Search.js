import React, {useState} from 'react';
import AppHeader from "../components/AppHeader";
import {useParams} from "react-router-dom";
import ImageColumn from "../components/ImageColumn";
import themesData from "../components/app-data/themesData";
import Themes from "../components/Themes";

function Search() {
    let {collection} = useParams();
    const [collectionImages, setCollectionImages] = useState([]);
    let arrayIndex = 0;
    let columnImages = [[], [], []];

    if (!collectionImages.length) {
        fetch("https://api.pexels.com/v1/search?locale=ru-RU&query=" + collection, {
            method: 'get',
            headers: new Headers({
                'Authorization': '563492ad6f91700001000001a43baf8658a94a48b210a1eacf5aae9b',
                // 'X-Ratelimit-Limit': 20000,
                // 'X-Ratelimit-Remaining': 19684,
                // 'X-Ratelimit-Reset': 1590529646,
            })
        }).then(response => response.json())
            .then(data => {
                setCollectionImages(data.photos)
            })
    }

    collectionImages.forEach(item => {
        if (arrayIndex === 3) {
            arrayIndex = 0;
        }
        columnImages[arrayIndex].push(item);
        arrayIndex++;
    })

    const imageColumns = columnImages.map((item, index) => <ImageColumn key={index} images={item}/>)
    const themeItems = themesData.map(item => <Themes key={item.id} item={item}/>)

    return (
        <>
            <AppHeader collection={collection} showSearch={true}/>
            <h1 className="collection-theme">Фото на тему "{collection}"</h1>
            <div className='suggestions'>{themeItems}</div>
            <div className='photos'>
                {imageColumns}
            </div>
        </>
    );
}

export default Search;
