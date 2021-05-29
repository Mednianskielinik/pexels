import React, {useState, useEffect} from 'react';
import './appHeader.css'
import HeaderNav from "./HeaderNav";

function AppHeader(props) {
    return (
        <header className='app-header' style={{height: props.showSearch ? '65px' : 0}}>
            <HeaderNav showSearch={props.showSearch}/>
        </header>
    );
}

export default AppHeader;