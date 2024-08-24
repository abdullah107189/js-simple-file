// -----------------second problem--------------
function evenOdd(string) {
    if (typeof string !== 'string') {
        console.log('please enter a string then run the code...');
    }
    else {
        let totalCharacter = string.length;
        if (totalCharacter % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
}
let myString = 'phone';
let stringResult = evenOdd(myString);
console.log(stringResult);

// -----------------second problem solved--------------