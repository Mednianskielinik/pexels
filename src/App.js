import React from 'react';
import './App.css';
import AppFooter from "./components/AppFooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Discover from "./pages/Discover";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/search">
                        <Discover/>
                    </Route>
                    <Route path="/search/:collection">
                       <Search/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <AppFooter/>
        </div>
    );
}

export default App;
