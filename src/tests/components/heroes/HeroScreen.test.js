import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe( 'Tests in <HeroScreen />', () => {
    const historyMock = {
        length: 3,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test( 'Should display the redirect component if there are no arguments in the URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero' ]}>
                <HeroScreen history={ historyMock }/>
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

    test( 'Should display a hero if the parameter exists and is found.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero/marvel-spider']}>
                <Route path='/hero/:heroId' component={ HeroScreen }/>
            </MemoryRouter>
        );

       expect( wrapper.find('.row').exists() ).toBe(true);
       expect( wrapper.find('h3').text().trim() ).toBe('Spider Man');
    });

    test( 'Should to return to the previous screen with PUSH', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero/marvel-spider']}>
                <Route 
                    path='/hero/:heroId' 
                    component={ () => <HeroScreen history={ historyMock }/> }
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( historyMock.push ).toHaveBeenCalledWith('/');
        expect( historyMock.goBack ).not.toHaveBeenCalled();
    });
    
    test( 'Should to return to the previous screen with GOBACK', () => {
       const wrapper = mount(
        <MemoryRouter initialEntries={[ '/hero/marvel-spider']}>
            <Route 
                path='/hero/:heroId' 
                component={ () => <HeroScreen history={ historyMock }/>}
            />
        </MemoryRouter>
       );

       wrapper.find('button').prop('onClick')();

       expect( historyMock.goBack ).toHaveBeenCalled();
       expect( historyMock.push ).not.toHaveBeenCalled();
    });
    
    test( 'Should call the Redirect if the hero does not exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/hero/marvel-Dark-Blader']}>
                <Route 
                    path='/hero/:heroId' 
                    component={ () => <HeroScreen history={ historyMock }/>}
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    });
});