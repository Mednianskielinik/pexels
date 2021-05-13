import React, {useState} from 'react';
import './App.css';
import AppFooter from "./components/app-footer/AppFooter";
import AppHeader from "./components/app-header/AppHeader";
import AppMainContent from "./components/app-content/AppMainContent";
import photoData from "./components/app-data/photoData";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <AppMainContent/>
            <AppFooter/>
        </div>
    );
}

export default App;
