import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import AddHouse from '../components/pages/AddHouse';

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
