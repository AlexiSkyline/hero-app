import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe( 'Test in <PrivateRoute />', () => {
    const rest = {
        location: {
            pathname: '/marvel',
            search: '?q=spider'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test( 'should display the component if authenticated and store in localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Ready!</span> }
                    { ...rest }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'span' ).exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel?q=spider' );
    });

    test( 'should block the component if it is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () =>  <span>Ready!</span> }
                    { ...rest }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'span' ).exists() ).toBe( false );
    });
});