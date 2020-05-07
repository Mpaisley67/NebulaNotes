//Loops are handy in coding (not just JavaScript)
// A Loop counts through items and executes code for each for each item
 //Syntax:
 //for (start; max; increase){}

// for (var counter = 1;counter < 5 ; counter++ ){
//     console.log(`loop number ${counter}`);
//     }
    
    // var x = 5;
    // var y = 0;
    // for (var index = 0; index <5; index++){
    //     console.log('breaking the loop!');
    //     y = y + 1
    //     if(y ===x){
    //         console.log(y);
    //     }
    // }    
    // - Nested Loops:
    //  - Is a loop insde of another loop
    //      -DANGEROUS because it can decrease your code efficiency
            // Assignment
            //create a loop that greets us 10 times!
            // - After running your console should look like:
                // Hi
                // Hi
                // Hi
                // Hi
                // Hi
        
        // for (var index = 0; index < 5; index++){
        // console.log(`Hi!`);
        //     }

// Q2: Create a loop which tells us what loop number it is on

// // - The CLI should look as follows:
// // - Loop Count: 1
// // - Loop Count: 2
// // - Loop Count: 3
// // - Etc.. based on the max value parameter

// for (var index = 0; index < 5; index++){
//     console.log(`Loop Count ${index + 1}`);
//     }

// Q3: Loop over the following array and console.log the current index value
// - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
// - Zeus
// - Hades
// - Hermies
// - Poseidon

 //First Iteration index = 0
 //run consol.log and print out Zeus
//at line 53 it will return to the for loop and restart process/loop

// Second Iteration, index++ --> index = 1
 
//It will repeat until the condition is no longer true, index <arr.length

// // Hard:
// Q4: Loop over the following array and log to the CLI an array that has each word without any vowels
// - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// - Output: ['ppl', 'Bnn', 'rng', 'Pch', 'Strwbrry', 'Plm'];

// var arr = ["Apple", "Banana", "'Orange", "Peach", "Strawberry", "Plum"];
// 

//         // Very Hard:
// // Optional
// // Q5: Loop over the following array and log to the CLI each word without any vowels UNLESS the vowel is the first letter of the word
// // - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// // - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];

// My work
// Breakout Session 1    
//what is increment
// var num = 1;
// num = num + 1;
// num += 1;
// num++; //this means add 
// BIG Difference is (n + 1) vs (n = n + 1)

// An example of returing the index value
//This is how Loop thinks
// num++;
// num++;
// num++;
// num++;
// console.log(num);

//Loop up to the number 5, increasing by 1
// for (let i = 0; i < 5; i+=1){
//         console.log(i);
// }
// // Examples
// for (let i = 0; i < 6; i+=1){
//         console.log(i);
// }
// Examples
// Nested Loop
// Nested Loops are loops that contain other loops
// var arr = ['Hello', 'World', 'This', 'Is', 'Machine'];
// for (let i = 0; i < arr.length; i+=1){
//         console.log(World)
// }
//  for(var j = 0; j < word.length; j++){
//          var letter = word[j];
//         //  console.log(' ' + j);
//          console.log(word)
//  }

//  Boolean Examples
// var thing3 = true;
// var thing4 = false;
// var day = 'Monday';
// var obj = {person: 'name'};

// if (true){
//         console.log('Hello');
// }

//Assignment

// Q1: Create a loop that greets us 5 times!
//      - After running your console should look like:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!

// The word LET replaces (var) i equals 0; which is less than 5;  
// The i++ indicates an addition of one iteration of the word "Hi". Anything in {} indicate its own scope.
// For example the word 'Hi' was Looped (repeated) 5 times. 
// The value of i is mutable, meaning that the index can be changed to give a different outcome.

// for (let i = 0; i < 5; i++) {
    ///console.log(prints whats inside parentesis to the term TERMINAL CLI/BASH/ZSH)
//         console.log('Hi!');
// }

// Q2: Create a loop which tells us what loop number it is on
//      - The CLI should look as follows:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter
//
//The word LET replaces (var) j equals 0; which j is less than 10; 
//The j++ indicates an addition of one iteration of the word "Loop Count: 1". Anything in {} indicate its own scope
// //so when you console.log(j + 1) Loop Count will repeat 10 times.  
// // This calculation is mutable, meaning that the index can be changed to give a different outcome.

// for (let j = 0; j < 10; j++) {
// console.log(j + 1)
// }
    
    // Q3: Loop over the following array and console.log the current index value
    //      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
    //          -   Zeus
    //          -   Hades
    //          -   Hermies
    //          -   Poseidon
    
//    Explanation
    // The word LET replaces (var) k equals 0; which k is less than greekGods.length; 
    //The k++ indicates an addition of one iteration of the Array filled with 4 strings which are, 
   // ['Zeus', 'Hades', 'Hermies', 'Poseidon']. Anything in {} indicate its own scope
   //so when you console.log(currentGod) will list the names of the Greek Gods.  
   // This calculation is mutable, meaning that the index can be changed to give a different outcome.
    
 // declare a variable called greekGods. Set the variable greekGods equal to an Array filled with 4 strings which are, 'Zeus', 'Hades', 'Hermies', 'Poseidon'.
     
    // var greekGods = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];
    // iterte trough the greekGods array, one value at a time
    // for(var k = 0; k < greekGods.length; k++){
        //declare a variable called currentGod
        //set that variable equal to the value at the current index
    //     var currentGod = greekGods[k];
    //Print our value to the
    //     console.log(currentGod);
    // }
    
//     // Q4: Hard:
//         // Loop over the following array and log to the CLI an array that has each word without any vowels
//         //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//         //      - Output: ['ppl', 'Bnn', 'rng', 'Pch', 'Strwbrry', 'Plm']; 
//              //I want to loop over the array
//             // I want to figure out if a word has a vowel in it
//             // If a word has a vowel remove said vowel
//             // Do the same thing for capital voewls
//             // Add these words into a new array
    
//         // var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//         // var fruitNoVowels = [];
    
//         // Original solution
//         // for(var i = 0; i < fruit.length; i++){
//         //     var currentFruit = fruit[i];
//         //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1){
//         //         currentFruit = currentFruit.split('A').join('');
//         //         currentFruit = currentFruit.split('a').join('');
//         //     }
//         //     if (currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1){
//         //         currentFruit = currentFruit.split('E').join('');
//         //         currentFruit = currentFruit.split('e').join('');
//         //     }
//         //     if (currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1){
//         //         currentFruit = currentFruit.split('I').join('');
//         //         currentFruit = currentFruit.split('i').join('');
//         //     }
//         //     if (currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1){
//         //         currentFruit = currentFruit.split('O').join('');
//         //         currentFruit = currentFruit.split('o').join('');
//         //     }
//         //     if (currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
//         //         currentFruit = currentFruit.split('U').join('');
//         //         currentFruit = currentFruit.split('u').join('');
//         //     }
//         //     fruitNoVowels.push(currentFruit)
//         // }
    
//         // // Solution 2
//     declare a variable called fruit.  The variable fruit equal to an Array filled with 6 strings 
//     ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];  for each fruit we ask 
// 
// Explanation
// if(currentFruit.indexOf vowel('a') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('A') if greater than negative 1, will remove the vowels (a) from the string of fruits
// currentFruit.indexOf vowel('e') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('E') if greater than negative 1, will remove the vowels (e) from the string of fruits
// currentFruit.indexOf vowel('i') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('I') if greater than negative 1, will remove the vowels (i) from the string of fruits
// currentFruit.indexOf vowel('o') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('O') if greater than negative 1, will remove the vowels (o) from the string of fruits 
// currentFruit.indexOf vowel('u') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('U') if greater than negative 1, will remove the vowels (u) from the string of fruits
// )}

    // if(currentFruit.indexOf vowel('a') (lowerCase) if greater than negative -1 ||(or) currentFruit.indexOf vowel('A') if greater than negative 1
    //    currentFruit.indexOf vowel('e') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('E') if greater than negative 1
    //    currentFruit.indexOf vowel('i') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('I') if greater than negative 1
    //    currentFruit.indexOf vowel('o') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('O') if greater than negative 1
    //    currentFruit.indexOf vowel('u') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('U') if greater than negative 1
    
//           for(var i = 0; i < fruit.length; i++){
//             var currentFruit = fruit[i];
//             // One if
//             if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
//             currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
//             currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
//             currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
//             currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1
//             ){
//                 currentFruit = currentFruit.split('A').join('');
//                 currentFruit = currentFruit.split('a').join('');
//                 currentFruit = currentFruit.split('E').join('');
//                 currentFruit = currentFruit.split('e').join('');
//                 currentFruit = currentFruit.split('I').join('');
//                 currentFruit = currentFruit.split('i').join('');
//                 currentFruit = currentFruit.split('O').join('');
//                 currentFruit = currentFruit.split('o').join('');
//                 currentFruit = currentFruit.split('U').join('');
//                 currentFruit = currentFruit.split('u').join('');
//             }
//             fruitNoVowels.push(currentFruit)
//         }
    
// //         // // Solution 3
//     declare a variable called fruit.  The variable fruit equal to an Array filled with 6 strings 
//     ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];  for each fruit we ask  
//     //if(currentFruit.indexOf vowel('a') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('A') if greater than negative 1, will remove the vowels (a) from the string of fruits
//     //currentFruit.indexOf vowel('e') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('E') if greater than negative 1, will remove the vowels (e) from the string of fruits
//     //currentFruit.indexOf vowel('i') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('I') if greater than negative 1, will remove the vowels (i) from the string of fruits
//     //currentFruit.indexOf vowel('o') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('O') if greater than negative 1, will remove the vowels (o) from the string of fruits 
//     //currentFruit.indexOf vowel('u') (lowerCase) if greater than negative 1 ||(or) currentFruit.indexOf vowel('U') if greater than negative 1, will remove the vowels (u) from the string of fruits
//     )}
    
//         // for(var i = 0; i < fruit.length; i++){
//         //     var currentFruit = fruit[i].toLowerCase();
//         //     // One if
//         //     if(currentFruit.indexOf('a') > -1 || currentFruit.indexOf('A') > -1 ||
//         //     currentFruit.indexOf('e') > -1 || currentFruit.indexOf('E') > -1 ||
//         //     currentFruit.indexOf('i') > -1 || currentFruit.indexOf('I') > -1 ||
//         //     currentFruit.indexOf('o') > -1 || currentFruit.indexOf('O') > -1 ||
//         //     currentFruit.indexOf('u') > -1 || currentFruit.indexOf('U') > -1){
//         //         currentFruit = currentFruit.split('A').join('').split('a').join('').split('E').join('').split('e').join('').split('I').join('').split('i').join('').split('O').join('').split('o').join('').split('U').join('').split('u').join('');
//         //     }
//     fruitNoVowels.push(currentFruit);
//         // }
    
//         // Final Solution
//declare a variable called fruit, set it is equal to an array of strings
//        // Loop over the following array and log to the CLI an array that has each word without any vowels  
//       //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//     //      - Output: ['ppl', 'Bnn', 'rng', 'Pch', 'Strwbrry', 'Plm']; 
//      var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//     //declare a variable called fruit.  The variable fruit equal to an Array filled with 6 strings 
//     ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];  
//     //The variable of currentFruit.index should equal to fruit[i].toLowerCase() of vowels (a,e,i,o,u) 
//     
//
//var fruitNoVowels = [];
// iterate over the fruit array; starting at the first index and going until the last
//         for(var i = 0; i < fruit.length; i++){
    //create avariable that is equal to the lowercase version of the current fruit
//             var currentFruit = fruit[i].toLowerCase();
//create a variable that whch is an array, that holds all of the vowel value
//             var vowels = ['a','e','i','o','u'];
//iterate through the vowel array
//             for (var index = 0; index < vowels.length; index++) {
//                 const currentVowel = vowels[index];
//                 if(currentFruit.indexOf( currentVowel ) > 0){
//                     currentFruit = currentFruit.split(currentVowel).join('');
//                 }
//             }
//             fruitNoVowels.push(currentFruit);
//         }
//         console.log(fruitNoVowels);
        
//     // Q5: Very Hard:
//         //Optional 
//         // Loop over the following array and log to the CLI each word without any vowels UNLESS the vowel is the first letter of the word
//         //      - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//         //      - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];
//     // var fruit = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//     // var fruitNoVowels = [];
    
//         // Solution
//         for(var i = 0; i < fruit.length; i++){
//             var currentFruit = fruit[i].toLowerCase();
//             var vowels = ['a','e','i','o','u'];
//             for (var index = 0; index < vowels.length; index++) {
//                //create a variable that is equal to the current value 
                // const currentVowel = vowels[index];

//                 // NEXT LINE IS THE DIFFERENCE FOR THE TWO PROBLEMS
//                 // Start changing vowels after the first letter, 0, not at -1
//                 if(currentFruit.indexOf( currentVowel ) > 0){
//                     currentFruit = currentFruit.split(currentVowel).join('');
//                 }
//             }    
//             fruitNoVowels.push(currentFruit);
//         }
//         console.log(fruitNoVowels)
