import {createStore, combineReducers, applyMiddleware, compose} from 'react-redux';
import thunk from 'react-redux';
import firebase from 'firebase';
import './setupFirebase';
import auth, {setUser} from "./state/auth";

const reducer = combineReducers({
    auth
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged(user => {
    if(user !== null) {
        store.dispatch(enableSync())
    } else {
        store.dispatch(disableSync())
    }
    store.dispatch(setUser(user))
});

export default store;