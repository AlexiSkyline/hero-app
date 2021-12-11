import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    return (
        <div>
            <img src={ './assets/logos/Marvel_Logo.png' } style={{ maxWidth: 200 }} alt='Marvel Logo' />
            <hr/>
            <HeroList publisher='Marvel Comics'/>
        </div>
    );
}