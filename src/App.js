import React from 'react';
import './App.css';
import AppFooter from "./components/app-footer/AppFooter";
import AppHeader from "./components/app-header/AppHeader";
import Home from "./components/app-content/home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Search from "./components/app-content/search/Search";
import HeaderContent from "./components/app-header/HeaderContent";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </BrowserRouter>
            <AppFooter/>
        </div>
    );
}

export default App;
