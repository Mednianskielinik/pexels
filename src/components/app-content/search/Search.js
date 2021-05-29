import React, {useState, useEffect} from 'react';
import '../appContent.css';
import CollectionRow from "./CollectionRow";
import searchData from "../../app-data/searchData";
import ImageCard from "../ImageCard";

function Search() {

    const rows = searchData.map(item => <CollectionRow key={item.id} item={item}/>)

    return (
        <div className='collections'>
            {rows}
        </div>
    );
}

export default Search;