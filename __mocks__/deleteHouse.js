export default function HouseDelete(house_id,myhouses) {
    currentHouses= myhouses.filter((house) => {
         house.id !== house_id;
    })

    return currentHouses;
} 