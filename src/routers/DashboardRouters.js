import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DCScreen } from '../components/dc/DCScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouters = () => {
    return (
        <>
            <Navbar/>

            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={ MarvelScreen }/>
                    <Route exact path='/heroe/:heroId'/>
                    <Route exact path='/dc'component={ DCScreen }/>

                    <Redirect  to='/marvel'/>
                </Switch>
            </div>   
        </>
    );
}