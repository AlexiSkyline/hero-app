import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe( 'Test in <SearchScreen />', () => {
    test( 'Should displayed correctly with the  default value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <Route path='/search' component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
    });

    test( 'Should display Batman and the input with the value of the queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman'] }>
                <Route path='/search' component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
    });

    test( 'Should display Error if no hero found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=IronSpider']}>
                <Route path='/search' component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('There is no a hero with IronSpider');
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Should call the push for the history', () => {
        const historyMock = {
            push: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
                <Route 
                    path='/search'
                    component={ () => <SearchScreen history={ historyMock }/>}
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( historyMock.push ).toHaveBeenCalledWith('?q=batman');
    });
    
});