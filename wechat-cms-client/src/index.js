import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'

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
        <Router>
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
        </Router>
    </Provider>    ,
        document.getElementById('root'));

registerServiceWorker();
