import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {history, store} from './store'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { LocaleProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import DevTools from './containers/DevTools'

//<DevTools />

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} routes={data}>
            <LocaleProvider >
                <div style={{height:'100%'}}>
                    <Route path="/" exact component={App} />
                    <Route path="/login" component={Login} />
                </div>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
