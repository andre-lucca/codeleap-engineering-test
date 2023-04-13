import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { postsReducer } from "./postsReducer.js";

export const reduxStore = createStore(postsReducer, applyMiddleware(thunk))