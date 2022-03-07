import React from 'react';
import Start from './start'
import Uslugi from './uslugi'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Middle() {
    return (
        <Router>
            <Switch>
                <Route exact path="/secret">
                    <Start />
                </Route>
                <Route path="/uslugi" ignoreScrollBehavior>
                    <Uslugi />
                </Route>
            </Switch>
        </Router>
    );
}

export default Middle;
