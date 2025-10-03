const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const itemsObject = {};
items.forEach((item, index) => {
  itemsObject[item] = index;
});

console.log(' Array:', items);
console.log('Object:', itemsObject);
