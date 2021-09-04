function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, 'lastName', {
    value: lastName,
    enumerable: true,
    configurable: true,
    writable: false,
  });
}

const person = new Person('Carlos', 'Dutra');

person.lastName = 'Naum sei'; // TypeError: Cannot assign to read only property 'lastName' of object '#<Person>'

console.log(person);
