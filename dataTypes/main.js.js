//This file is where I am creating my first GitHub Repo 
// console.log() is used to print (AKA log) information to the Command Line Interface (CLI)
//control.log("Hello World!!")
  
//A variable is a symbol that stands for another value
// var x = 2;
// console.log(1+x);
    
//JavaScript Data Types
    // 1. Strings
    // A set of charactters surrounded by quotes " ", ' ', ' '
    var name = 'Mitsie';
//     console.log('Hello, I am ' + name);
//     console.log("My name is " + name);

// console.log(name + ` said "Nic said, help"" `);

// var singleQuote = 'single-quoted';
// var doubleQuote = "double-quoted";
// var backticks = 'backticks';

//back ticks can be used for more complicated stuff
// var multiplePeople = `Mitsie
// Geo
// Nat
// `
//The following are template literals
// console.log(`My name is ${name}`)
// console.log(`${multiplePeople}`)  

//We can reference a single letter by its index
// var str = "Highness";
// console.log('Index 2: ' + str[2] + '.'); //g
//Highness
//01234567 <- indices

// var str2 = "Sleepy";
// console.log(str2[1] + str2[2] + str2[3])
//Sleepy
//01234 <- indices

// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// console.log(alphabet[13] + alphabet[8] + alphabet[2]);
// console.log(`Hi ${name}, welcome to FB!`)

//abcdefghij k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
//0123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

// //Declare str1 and give it a value
// var str = "Hello";

// //We forget string are immutable and try to swap a letter, this doesn't work
// Str[0] =  "J" //Hello -> Jello; //Doesn't Work

// //We create a new string (str2) and assign it a value by referencing indices of str1
// var str2 = `J${str[1] + str[2] + str[3] + str[4]}`;


//We set str1 equal to str2
//str1 = str2;

//we check to see the value of str1
// console.log('str1: 'sr1 + ', '+ 'str2: ' + str2);
// str[0] = "hi"; // won't work

//console.log(str)
//Strings are immutable, which means that they cannot be changed; however the variable can
// var str = "Hello";
// var str = "Hello World!"; // we want new string to be "Hello World!"
// console.log(str)

// //Getting string length & last character
// var str =  "Hello"; // length of, the o is at index 4
// //Hello <- 5 characters = length of 5
// var lengthOfStr = str.length
// var lastStrChar = str[lengthOfStr -1];
// console.log(lastStrChar);


//getting a specific string.  A substring is any small portion of a string (could be any part of a word)
// Create our fullName variable
//var fullName = 'Mitsie;Paisley';
    // var fullName = 'Mitsie;Paisley';
    // //Look for 'divider' index. AKA the index of ';'.
    // var divider = fullName.indexOf(';'); // this is a number
    // // Slice fillName into its first part starting from Index 0 until the index of ';'. AKA the divider
    // var first = fullName.slice(0, split)
    // //Slice fullname into its last part starting the index of ';' until the end ';'.
    // // +1 is to account for inclusiveness.
    // var last = fullName.slice(split + 1, fullName.length)
    // // Show ln the CLI (Command Line Interface).
    // // console.log(first);
    // // console.log(last);

    // //Character doesn't exist
    // //Declare fullName and assign it a value.
    // var fullName = 'Mitsie Paisley';
    // var divider = fullName.indexOf(';'); //a number
    // //shows the result
    // // console.log(divider);  // Produces -1


    //Making a string lower case
    // var meme = "tHiS is a MEmE"
    // var smallMeme =meme.toLowerCase();
    // var bigMeme = meme.toUpperCase();
    // var person1 = "Mitsie Paisley"
    // var person2 = "Leisser Espana"
    // var person3 = "Spencer Mc:Cannon"
    

    // console.log(meme)
    // console.log(smallMeme)
    // console.log(bigMeme);

//     //Example with no caps
//     var fullName = 'mitsie paisley';
//     //declaring the variable divider and we're setting it to the index of space within our full name variable.
//     var divider = fullName.indexOf(' ') 
//     console.log(divider);
//     var fixedFirst = 'M' + fullName.slice(1, divider);
//     var fixedLast = 'P' + fullName.slice(divider + 2, fullName.length);
//     var fixedName = fixedFirst + ' ' + fixedLast
//     console.log(fixedName);
   
//     //Variable Naming Conventions
//         //camelCase
//         var fullName = "Mitsie Paisley";
//         //snake_case
//         var full_name = "Mitsie Paisley";
//         //PasccalCase
//         var FullName = "Mitsie Paisley";

//     // // console.log('HelloWorld'.indexOf(';'));
//     // console.log('HelloWorld;'.slice(1,5));
//     // console.log('HelloWorld;'.slice(0, 5));
// //     // console.log('HelloWorld;'.slice(0, 7));
// //     // console.log('HelloWorld;'.slice(2, 7));

// // "Goodbye"

//ASSIGNMENT 
 
var fullText1 = "MAN67584758;Manchester Piccadilly";
var divider = fullText1.indexOf(';');
var computerText = fullText1.slice(0, divider);
var humanText = fullText1.slice(divider + 1, fullText1.length);
var finalText = `Computer: ${computerText}. Human: ${humanText}`;
console.log(finalText)

var fullText2 = "GNF5764765;Greenfield";
var divider= fullText2.indexOf (';');
var computerText = fullText2.slice(0, divider);
var humanText = fullText2.slice(divider + 1, fullText2.length);
var finalText = `Computer: ${computerText}. Human: ${humanText}`;
console.log(finalText)

var fullText3 = "LIV5hg65hd7374;Liverpool Lime Street";
var divider = fullText3.indexOf (';');
var computerText = fullText3.slice(0, divider);
var humanText = fullText3.slice(divider + 1, fullText3.length);
var finalText = `Computer: ${computerText}. Human: ${humanText}`;
console.log(finalText)

var fullText4 = "SYB4f;Stalybridge";
var divider = fullText4.indexOf (';');
var computerText = fullText4.slice(0, divider);
var humanText = fullText4.slice(divider + 1, fullText4.length);
var finalText = `Computer: ${computerText}. Human: ${humanText}`;
console.log(finalText)

var fullText5 = "HUD5767ghtyfyr45;Huddersfield";
var divider = fullText5.indexOf(';');
var computerText = fullText5.slice(0, divider);
var humanText = fullText5.slice(divider + 1, fullText5.length);
var finalText = `Computer: ${computerText}. Human: ${humanText}`;
console.log(finalText)
//



