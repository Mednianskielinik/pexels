import React from 'react';
import './App.css';
import AppFooter from "./components/app-footer/AppFooter";
import AppHeader from "./components/app-header/AppHeader";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeBanner from "./components/app-content/home/HomeBanner";
import SecondNav from "./components/app-header/SecondNav";
import Home from "./components/app-content/home/Home";
import Search from "./components/app-content/search/Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <AppHeader showSearch={false}/>
                        <HomeBanner/>
                        <SecondNav active={'home'}/>
                        <Home/>
                    </Route>
                    <Route path="/search">
                        <AppHeader showSearch={true}/>
                        <SecondNav active={'search'}/>
                        <Search/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <AppFooter/>
        </div>
    );
}

export default App;
