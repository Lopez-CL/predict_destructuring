// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) 
// Tesla (not random?)
console.log(otherRandomCar)
// Mercedes (not random )

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// ^^ will result in a Reference Error.
console.log(otherName);
// ^^ Elon

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
// ^^ "12345"
console.log(hashedPassword);
// ^^ Initially thought it was Reference error but, it actually returned undefined. I would think that this would be a reference error because there is no password property in person?

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers; 
//Predict the output
console.log(first == second);
// False
console.log(first == third);
// ^^ True

// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
// const {secondKey: [,willThisWorkAgain]} = lastTest;
//Predict the output
console.log(key);
// ^^ "value"
console.log(secondKey);
// [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// console.log(willThisWorkAgain);
// ^^ I initially thought it would be a reference error because I thought we would need to reference {secondKey: [,willThisWork ]} = lastTest (and this works). However, I suppose the third const correctly references the value of the nested list from the key, secondKey. Cool to see if play out a different way.