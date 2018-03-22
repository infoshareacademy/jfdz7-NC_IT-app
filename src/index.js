import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
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
