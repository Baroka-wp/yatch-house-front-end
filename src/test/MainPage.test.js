import MainPage from '../components/pages/mainpage';
import { render} from '@testing-library/react';
import store from './redux/store';
import { Provider } from 'react-redux';

describe('mainpage', () => {
    it('renders mainpage component', () => {
        render(
        <Provider store={store}>
            <MainPage />
        </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    });



