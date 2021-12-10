import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route exact path='/login'/>
                    <Route exact path='/'/>
                </Routes>
            </div>
        </Router>
    );
}