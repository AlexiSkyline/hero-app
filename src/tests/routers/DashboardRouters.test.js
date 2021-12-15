import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../components/auth/AuthContext';
import { DashboardRouters } from '../../routers/DashboardRouters';
import { MemoryRouter } from 'react-router-dom';

describe( 'Test in <DashboardRouters />', () => {
    let contextValue = {
        dispacth: jest.fn(),
        user: {
            logged: true,
            name: 'AlexiSkyline'
        }
    }

    test( 'moust be displayed correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRouters />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'AlexiSkyline' );
    });
});