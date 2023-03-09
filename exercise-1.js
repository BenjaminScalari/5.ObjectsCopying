const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName = 'Simon';

// cambiando il nome a person2 cambia anche person1 perchè è stata si eseguita una copia, ma una copia superficiale

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
