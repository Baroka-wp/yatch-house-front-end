import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import MainPage from '../components/pages/mainpage';
import store from "../redux/store";

describe('mainpage', () => {
  it('renders mainpage component', () => {
    const data = [{
        id: 1,
        name: 'House 1',
        description: 'House 1 description',
        price: 100,
        image: 'https://picsum.photos/200/300'}]

        const MainPage = () =>{
            return(
                <Provider store={store}>
                    <div>
                        <h1>{data[0].name}</h1>
                        <p>{data[0].description}</p>
                    </div>
                </Provider>
            )
        }

        expect(MainPage).toMatchSnapshot();
  });
});
