import React from 'react';
import { mount } from 'enzyme'; 
import { AuthContext } from '../../../components/auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe( 'Test in <LoginScreen />', () => {
    const historyMock = {
        replace: jest.fn()
    }

    let contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ historyMock }/>
        </AuthContext.Provider>
    );

    test( 'Should be displayed correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test( 'Should perform dispatch and navigation', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'AlexiSkyline' }
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/marvel');
        handleClick();
        
        expect( historyMock.replace ).toHaveBeenCalledWith('/marvel');
    });
});