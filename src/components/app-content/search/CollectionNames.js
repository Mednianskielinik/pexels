import React, {useState, useEffect} from 'react';
import '../appContent.css';

function CollectionNames(props) {
    return (
        <li>
            <a>{props.name}</a>
        </li>
    );
}

export default CollectionNames;