import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {history, store} from './store'
import { ConnectedRouter } from 'react-router-redux'

import App from './App';
import Base from './pages/Base';
import NotFound from './pages/NotFound';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                <div>
                    <ul>
                        <li><Link to="/">Base</Link></li>
                        <li><Link to="/about">NotFound</Link></li>

                    </ul>

                    <hr/>

                    <Route exact path="/" component={Base}/>
                    <Route path="/about" component={NotFound}/>
                </div>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>    ,
        document.getElementById('root'));

registerServiceWorker();
