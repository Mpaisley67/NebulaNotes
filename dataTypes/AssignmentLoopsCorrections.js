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
// var arr = ['Zeus', 'Hades', 'Hermies', 'Poseidon']
// for (var index = 0; index < arr.length; index++){
//     console.log(arr[index]);
//     }

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
    