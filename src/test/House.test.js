// import House from "../components/pages/House";
import { render, screen } from '@testing-library/react';
// import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('house', () => {
  it('renders house component', () => {
    const data = [{
      id: 1,
      name: 'House 1',
      description: 'House 1 description',
      price: 100,
      image: 'https://picsum.photos/200/300',
      location: 'House 1 location',
    }];

    const House = () => (
      <Provider store={store}>
        <div>
          <h1>{data[0].name}</h1>
          <p>{data[0].description}</p>
        </div>
      </Provider>
    );

    render(<House />);
    expect(screen.getByText('House 1')).toBeInTheDocument();
    expect(screen.getByText('House 1 description')).toBeInTheDocument();
  });
});
