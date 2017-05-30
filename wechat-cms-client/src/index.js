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
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import DevTools from './containers/DevTools'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                <div style={{height:'100%'}}>
                    <App />
                    <DevTools />
                </div>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
