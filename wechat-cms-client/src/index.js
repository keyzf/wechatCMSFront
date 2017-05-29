import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {history, store} from './store'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                    <App />
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
