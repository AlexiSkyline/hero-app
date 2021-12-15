import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import { AuthContext } from '../../../components/auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe( 'Tests in <Navbar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'AlexiSkyline'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test( 'must be displayed correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'AlexiSkyline' );
    });
    
    test( 'must call the logout and use the History', () => {
       wrapper.find('button').prop('onClick')();
       
       expect( contextValue.dispatch ).toHaveBeenLastCalledWith({ type: types.logout });
       expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });
});