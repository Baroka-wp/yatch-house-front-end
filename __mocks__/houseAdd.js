export default function newHouse(houseName, location, price, myhouses){
    myhouses.push({ name: houseName, location: location, price: price })
    
    return myhouses
}