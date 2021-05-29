import { createStore } from "redux";

// This is the reducer
const reducer = () => {
    /*Something goes here */
}

//initialState is optional.
//For this demo, I am using a counter, but usually state is an object
const initialState = 0
const store = createStore(reducer, initialState);