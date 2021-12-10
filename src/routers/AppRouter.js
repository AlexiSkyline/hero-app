import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login'/>
                    <Route path='/' component={ DashboardRouters }/>
                </Switch>
            </div>
        </Router>
    );
}