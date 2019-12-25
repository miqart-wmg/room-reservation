import { createStore, compose, applyMiddleware } from "redux";
import reducer from '../reducers/';
import thunk from 'redux-thunk'; 

const middleware = [thunk];

const store = createStore(
    reducer,
    compose(applyMiddleware(...middleware))
)

export default store;
