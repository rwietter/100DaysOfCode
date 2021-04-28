const fruits = [
  {
    id: 1, name: 'tomato', price: 3,
  },
  {
    id: 2, name: 'avocate', price: 5,
  },
  {
    id: 3, name: 'banana',
  },
];

/* Determines whether all the members of an array satisfy the specified test */
const res = fruits.every((item) => item.price);

console.log(res); // ─> false
