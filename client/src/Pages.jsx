import React from 'react';
import Dashboard from './Dashboard';
import Orders from './Orders';
import { Switch, Route } from 'react-router-dom';

const Pages = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />} />
        </Switch>
    )
};

export default Pages;