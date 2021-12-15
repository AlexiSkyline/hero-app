import { mount } from 'enzyme';
import { AuthContext } from '../../components/auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe( 'Test in <AppRouter />', () => {
    let contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test( 'must show login if not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });

    test( 'must show the marvel component if authenticated', () => {
        contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'AlexiSkyline'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find( '.navbar' ).exists() ).toBe( true );
    });
});