export default function HouseDelete(house_id,myhouses) {
    let result= myhouses.filter(house=> 
        house.id !== house_id
    );

     return result;
} 