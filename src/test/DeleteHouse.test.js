// import DeleteHouse from "../components/pages/DeleteHouse";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("deletehouse", () => {
    it("renders deletehouse component", () => {

        const houseData = [
          {
            id: 1,
            name: "House 1",
            description: "House 1 description",
            price: 100,
            image: "https://picsum.photos/200/300",
            location: "House 1 location",
          },
        ];
         const handleDelete = () => {
            const newHouseData = houseData.filter((house) => house.id !== 1);
            return newHouseData;
            };

            const DeleteHouse = () => {
              return (
                    <div>
                      <h1>{houseData[0].name}</h1>
                      <p>{houseData[0].description}</p>
                      <button onClick={handleDelete}></button>
                    </div>
                  );
            };

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DeleteHouse houseData={houseData} handleDelete={handleDelete} />
                </BrowserRouter>
            </Provider>,
        );
        expect(component).toMatchSnapshot();

    });
});