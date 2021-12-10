import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouters = () => {
    return (
        <>
            <Navbar/>

            <div>
                <Switch>
                    <Route exact path='/marvel'/>
                    <Route exact path='/heroe/:heroId'/>
                    <Route exact path='/dc'/>

                    <Redirect  to='/marvel'/>
                </Switch>
            </div>   
        </>
    );
}