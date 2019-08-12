import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App'
import WhoIsIvan from './core/components/whoIsIvan';
import TalkBehindMyWork from './core/components/talkBehindMyWork';

const NotFound = () => <div>Not found !!!</div>;

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/whoIsIvan/" component={WhoIsIvan} />
            <Route path="/talkBehindMyWork/" component={TalkBehindMyWork} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
