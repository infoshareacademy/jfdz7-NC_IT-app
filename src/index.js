import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import store from './store'
import App from './components/App';
import Auth from  './components/RegisterForm/Auth';
import './setupFirebase'



ReactDOM.render(
    <Provider store={store}>
        <Auth>
        <Router>
            <App />
        </Router>
        </Auth>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

