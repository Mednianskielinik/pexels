import React from 'react';
import AppHeader from "../components/AppHeader";
import SecondNav from "../components/SecondNav";
import searchData from "../components/app-data/searchData";
import CollectionRow from "../components/CollectionRow";

function Discover() {
    const rows = searchData.map(item => <CollectionRow key={item.id} item={item}/>)

    return (
        <>
            <AppHeader showSearch={true}/>
            <SecondNav active={'search'}/>
            <div className='collections'>
                {rows}
            </div>
        </>
    );
}

export default Discover;
