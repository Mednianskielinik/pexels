import React from 'react';
import HeaderNav from "./HeaderNav";

function AppHeader(props) {

    return (
        <header className='app-header' style={{height: props.showSearch ? '65px' : 0}}>
            <HeaderNav showSearch={props.showSearch} searchText={props.collection}/>
        </header>
    );
}

export default AppHeader;