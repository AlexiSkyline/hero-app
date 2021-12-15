import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PublicRoute } from '../../routers/PublicRoute';

describe( 'Test in <PublicRoute />', () => {
    const rest = {
        location: {
            pathname: '/marvel',
        }
    }

    test( 'must show the component if it is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={ false }
                    component={ () => <h1>Login</h1> }
                    { ...rest }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'h1' ).exists() ).toBe( true );
    });

    test( 'should block the component if it is authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={ true }
                    component={ () => <h1>Login</h1> }
                    { ...rest }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'h1' ).exists() ).toBe( false );
    });
});