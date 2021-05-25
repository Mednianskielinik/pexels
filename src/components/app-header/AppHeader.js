import React, {useState, useEffect} from 'react';
import './appHeader.css'
import HeaderNav from "./HeaderNav";

function AppHeader(props) {
    return (
        <header className='app-header'>
            <HeaderNav />
        </header>
    );
}

export default AppHeader;