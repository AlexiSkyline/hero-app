import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const { user } = useContext( AuthContext );

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path='/login' 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute 
                        path='/' 
                        component={ DashboardRouters }
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    );
}