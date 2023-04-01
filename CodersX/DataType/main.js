/**
 * DATA TYPES:
 * Primitive types:
 * - Number
 * - String
 * - Boolean
 * Special types:
 * - underfined
 * - null
 * Refenrence types:
 * - Array 
 * - Object
**/

// escape a character
var str = 'Hello, I\'m Linh';

// undefined 
var a;
console.log(typeof a);

// Object
var dog = {
    name: 'Bin',
    age: 6,
    weight: 20
};
var obj = {};

// Array 
var dog1 = {
    name: 'Bin'
}, 
dog2 = {
    name: 'Gaus'
},
dog3 = {
    name: 'Bong'
};
dog3 = 'Nem'
var dogArray = [dog1, dog2, dog3];
console.log(dogArray);
console.log(dogArray[1]);

// Các phần tử trong mảng có thể không giống nhau
var listStudent = [
    {
        name: 'Nguyen Van A',
        age: 20,
        address: 'HCM'
    },
    {
    name: 'Tran Van B',
    age: 21,
    address: 'Ha Noi'
    },
];
console.log(listStudent);
