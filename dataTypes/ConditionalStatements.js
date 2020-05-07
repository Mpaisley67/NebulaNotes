// If or if/else statements (Conditional Statements)
// - If something is true do something
// - If somenthing is false do something else
// - Directly tied into bolean
//Potential Conditions
//->, Greater than
// -<, Less than
// <=, Less than or equal to
//- ===, Strict comparison
// - !==, not strictly equal
// - ==, Abstract comparison
// - !, not abstractly equal
// - A cndiion can include and statements and or statements
// - An and statement is defined with two ampersand singns (&&)
// - An or statement is defined with two bars (||)
// Example: If (x === true && y ===) {then do this}
// - 
// Doubles
// True && true === true
// - true && false === false
// - fales && false === false
// - true || true === true
//  - true || false === true
// - false || false === false
// Triples
// - true && true && true === true
// - true && true && false === false
//  - If ANY statement in an all 'and' conditional is false the entire thing is false
// - true && true || true === true
// - true false || true === true
// - true &&

// ! is called bang
// var x; is Undefined is considered 'false'
//var y = ""; an empty string is 'falsy"
//var z =0; //0 is falsy
var a = null; // null is falsy
var b = -10; // any number other than 0 is 'truthy'


if (true && true || false) {
    //statement(s)
    console.log('conditional is true');
} else {
    console.log("conditional isn't true");
}

var n = 10;
var i = 7;

var x = 'b';
if (n > 0 && i > 0) {
    //statement(s)
    console.log('conditional is true');
} else if (true){
    console.log('condition2 is true');
} else if (z) {
    console.log('neither conditional1 nor 2 is true');
}
