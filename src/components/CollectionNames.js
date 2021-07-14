import React from 'react';

function CollectionNames(props) {
    return (
        <li>
            <a href={"/search/"+props.name}>{props.name}</a>
        </li>
    );
}

export default CollectionNames;