export default function newHouse(houseName, location, price, myhouses) {
  myhouses.push({ name: houseName, location, price });

  return myhouses;
}
