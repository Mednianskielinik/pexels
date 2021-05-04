import React from 'react';
import './App.css';
import AppFooter from "./components/app-footer/AppFooter";
import AppHeader from "./components/app-header/AppHeader";
import AppMainContent from "./components/app-content/AppMainContent";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <AppMainContent/>
            <div style={{height: '200px', width: '200px', background: 'green'}}></div>
            <div style={{height: '200px', width: '200px', background: 'white'}}></div>
            <div style={{height: '200px', width: '200px', background: 'green'}}></div>
            <div style={{height: '200px', width: '200px', background: 'white'}}></div>
            <div style={{height: '200px', width: '200px', background: 'green'}}></div>
            <div style={{height: '200px', width: '200px', background: 'white'}}></div>
            <AppFooter/>
        </div>
    );
}

export default App;
