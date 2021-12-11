import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    return (
        <div>
            <img src={ './assets/logos/DC_Comics_Logo.png' } style={{ maxWidth: 150 }} alt='DC Comics Logo' />
            <hr/>
            <HeroList publisher='DC Comics'/>
        </div>
    );
}