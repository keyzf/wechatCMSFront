import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {history, store} from './store'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import NotFound from './pages/NotFound'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { LocaleProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import DevTools from './containers/DevTools'

//<DevTools />

ReactDOM.render(
    <Provider store={store}>

        <ConnectedRouter history={history}>
            <LocaleProvider >
                <div style={{height:'100%'}}>
                    <Redirect from="/" exact to="/admin/index"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={App}/>

                </div>
            </LocaleProvider>
        </ConnectedRouter>

    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
