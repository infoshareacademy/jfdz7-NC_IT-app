import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import { Provider } from 'react-redux';

import App from './components/App';
import Auth from  './components/RegisterForm/Auth';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Auth>
            <App/>
        </Auth>
    </Provider>,
document.getElementById('root')
);

registerServiceWorker();
