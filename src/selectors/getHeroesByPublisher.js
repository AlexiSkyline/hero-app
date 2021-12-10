import { heroes } from '../components/data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    const validPublishers = [ 'DC Comics', 'Marver Comics' ];

    if( !validPublishers.contains( publisher ) ){
        throw new Error( `Publisher "${ publisher }" no es correcto` );
    }

    return heroes.filter( hero => hero.publisher === publisher );
}