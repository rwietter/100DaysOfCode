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

// Determines whether the specified callback function returns true for any element of an array.
const res = fruits.some((item) => item.price);

console.log(res); // ─> true
