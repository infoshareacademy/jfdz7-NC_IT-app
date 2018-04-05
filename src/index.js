import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import App from './components/App';
import './setupFirebase'

ReactDOM.render(
    <Provider store={store}>
                <Router>
                        <App name={'Pomocnik Zakupowy'}/>
                </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

