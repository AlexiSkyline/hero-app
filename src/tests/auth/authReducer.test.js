import { authReducer } from '../../components/auth/authReducer';
import { types } from '../../types/types';

describe( 'Test in authReducer', () => {
    test( 'must return the default state', () => {
        const state = authReducer({ logged:false }, {}); 

        expect( state ).toEqual({ logged:false });
    });

    test( 'must authenticate and enter the users name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'AlexiSkyline'
            }
        }
        const state = authReducer({ logged: true }, action );

        expect( state ).toEqual({ logged: true, name: 'AlexiSkyline' });
    });

    test( 'must delete the users name and logged in false', () => {
        const state = authReducer({ logged: true, name: 'AlexiSkyline' }, { type: types.logout });

        expect( state ).toEqual({ logged: false });
    });
});