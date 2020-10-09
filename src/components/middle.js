import React from 'react';
import Start from './start'
import Uslugi from './uslugi'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Middle() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Start />
                </Route>
                <Route path="/uslugi">
                    <Uslugi />
                </Route>
            </Switch>
        </Router>
    );
}

export default Middle;
