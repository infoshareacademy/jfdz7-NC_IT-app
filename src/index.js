import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import Auth from './components/Auth'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import store from './store'
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

