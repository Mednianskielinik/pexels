import React from 'react';
import CollectionNames from "./CollectionNames";
import Collection from "./Collection";

function CollectionRow(props) {
    const collectionNames = props.item.collectionNames.map(item => <CollectionNames name={item}/>)
    const collections = props.item.collections.map(item => <Collection collection={item}/>)

    return (
        <div className='collection-row'>
            <div className="centered-grid">
                <h3>{props.item.name}</h3>
            </div>
            <div className="centered-grid">
                <ul className='collection-names'>
                    {collectionNames}
                </ul>
            </div>
            <div className="centered-grid">
                <ul className="collections-grid">
                    {collections}
                </ul>
            </div>
        </div>
    );
}

export default CollectionRow;