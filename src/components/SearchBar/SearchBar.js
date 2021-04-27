import {Component} from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    render() {
        return <div className='app-search'>
            <input className='app-search__input'/>
            <button className="app-search__button">$</button>
        </div>
    }
}