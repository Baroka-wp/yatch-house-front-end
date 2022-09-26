import AddHouse from '../components/pages/AddHouse';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';



describe('addhouse', () => {
    it('renders addhouse component', () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AddHouse />
                </BrowserRouter>
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

});

