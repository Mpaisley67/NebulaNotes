// console.log('Hello World')
// var str = 'Hello World'

// Setting a variable equal to an Array
// - Example: var arr = []

// console.log(arr)
// arr[1] = 'Mitsie';
// console.log(arr);

// Methods: length, push, unshift, pop, join
// var arr =['Mitsie', 'Kaya', 'Debbie', 'Samuel'];
//          0       1       2      3
// // console.log("Log 1: ");
// var strToArr = 'Test'.split('') //we can use splice on a string
// var testArr = 'Test'.splice(1, 0, 'e');
// console.log(testStr.join(''));

// arr.unshift ('Mitsie');
// console.log("Log 2: " , arr);

// var straw = ['Mitsie', 'Kaya', 'Debbie', 'Samuel'];
// straw[0] = ('Luke'); (square bracket allows you to replace anything)
// console.log(straw)
// Methods: length, push, unshift, pop, join 

// var arr= ['Nic', 'Kaya', 'Debbie', 'Samuel', 'Desmond'];
// var newPerson = 'Desmond'
// var str = arr.join('-') + newPerson;
// console.log(arr.join);

// console.log(str.split(' '))
// console.log (arr.join().split('-'));

// // console.log.apply(arr)
// //           0       1       2      3
// var AudiQuatro = {
//     name: 'AudiQuatro',
//     seats: 2,
//     Color: 'red'
// }

// var cars = [AudiQuatro, BMW, Porsche, Jeep];

// //          0       1       2           3       4
// var arr = ['Nic', 'Kaya', 'Debbie', 'Samuel', 'Desmond'];
// // arr.splice(2, 2, 'Mitsie', 'Spencer');
// arr.push('Mitsie');
// arr.unshift('Spencer');
// arr.splice(1, 0,'Solomon')
// console.log("Log 2: ", arr);

//An array is a data structure that consists of a group of elements.  Typically these elements are all of the same datatype
//The splice() method adds/removes items to/from an array, and returns the removed item(s). Note: This method changes the original array.
// The splice method is then connected to the array. ex: arr.splice()

// Goal: Turn a string into an array and add a IDBCursorWithValue, then change it back to a string
// var str = 'Hello World';
// var arr = str.split('');
// arr.splice(5, 1, '-')
// arr = arr.join('')
// console.log(str);
// console.log(arr);

//Array Methods":
// - length guves ys the length of the array
// - push adds an item to the end of an array
// - unshift adds an item to the front of an array
// - pop deletes the last item in array
// - join converts an array into a string

// typeof
// Examples
// typeof []; equals to object
// typeof ''; equals to string
// var obj {};equals to object
// typeof null equals Object - null is the absence of value
// typeof true equals to Boolean
// typeof  equals undefined

// var arr = [];
// var str = '';
// var obj = {};

//Null - the absence of anything

// var thing = null;

//Undefined 
// - Example
// - Not the same as not defined
// - Relates to hoisting
// item (usually variable, finction, or class) exists bu hasn't be assigned a value as yet

//Boolean
// - A true or false value . Often referred to as truthy or falsy
//Great for creating switches
// var thing3 = true;
// var thing4 = false;
// var  day = 'Monday';

//Everything without a value is false
// console.log(true === ''); 
// ///Write some codes that will split up a string into names
// //For example 'Kaya,Solomon' gets converted to 'Kaya, Solomon'.
// //Solution:
// console.log('Kaya,Solomon'.split(',').join(', '));

// userLogin === true
// var thing = null
// var thing2;
// console.log(thing2);

// console.log(typeof obj);

// var thing = 'Kaya,Solomon';

// if( thing.indexOf(',') > -1){
//     console.log(thing.split(','))
// }else {
// console.log(thing.indexOf('-'))
// }

// var fullName = 'Desmond Anthony C.L. Horsham-Brathwaite';
// if( fullName.length > 20){
//     fullName = fullName.slice(0, 20)
//     console.log(fullName)
// }

// If statements (Conditional Statements)
//If Statements
// - If something is true do something
// - If soethins is false do something else

// Examples:
// let strNumber = 1234;
// if(123 == '123' || strNjumber > 1){
//     console.log('hit');
// } else {
//     console.log('miss');
// }

// let strNumber = 10;
// if(strNumber < 0){
//     console.log('Negative');
// } else if (strNumber{
//     console.log('Small');
// }
// let userLogin = false;
// if(userLogin === false){
//     console.log('Please Log In!');
// } else if (userLogin === true) {
//     console.log('Small');
// }

// = is used for assigning values
// == is a "soft check"
// === is a perfect or "hard check"

// Assignment
// Question 1: Write some code that gives us the length of a given string.
// For example 'Peter Parker' gives us 12.
// For example 'Michelle Obama' gives us 14.

// var fullName = 'Mitsie Fiona Paisley';
// var fullName2 = [fullName.length];
// console.log(fullName.length);

// Question 2: Write some code that converts a string into all capitals
// For example: 'Peter Parker' changes to 'PETER PARKER'.
// b: Write some code that converts a string into all lowercase.
// For example: 'Michelle Obama' converts 'michelle obama'.

// var str = 'Metropolitan Musium of Arts';
// var coName = str.toUpperCase('');
// console.log(coName);

//3a: Write some code that extrapolates the second word from the string: "My home town.".

// var str = "My home town";
// var strArr = str.split(" ")[1];
// console.log(strArr);


// 4b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
// The result should be: 'eat'

// var str = "Lets eat, Grandpa!";
// strArr = str.split(" ")[1]; 
// console.log(strArr);


// /Q4:
// Write some code that capitalizes a portion of a given string.
// For example: "I'm very happy" becomes, "I'm VERY happy!"

// var str = "I'm very happy"; 

// strArray = str.split(" ");
// console.log(strArray);
// var capitalized = strArray[1].toUpperCase();
// console.log(capitalized);

// Arrays:
// Q1: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']

// arr = ['Red', 'Green', 'Yellow', 'Purple'];
// console.log(arr [2]);

// Q2: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']

// var arr = ['Red', 'Green', 'Yellow', 'Purple'];
// console.log(arr)
// arr.push('Pink');
// arr.shift()
// console.log(arr)

// Q2b (Splice)
// var arr = ['Red', 'Green', 'Yellow', 'Purple'];
// arr.shift();
// arr.push('Pink')
// arr.splice(2, 0, "Blue");
// console.log(arr)

//The first argument is the index of insertion.
//The second argument is the number of deletions.
//The third arguement is what you are inserting