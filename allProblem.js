// ----------frist problem---------
function mindGame(number){
    if(typeof number !== 'number'){
        return 'please enter a number then run the code...';
    }
    let multi = number * 3;
    let add = multi + 10;
    let division = add / 2;
    let remove = division - 5;
    return remove;
}
let inputNumber = 4;
let result = mindGame(inputNumber);
console.log(result);

// ---------frist problem solved------------




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


// --------------- third problem --------------
function isLGSeven(inputNumber) {
    if (typeof inputNumber !== 'number') {
        return 'please enter a number then run the code...';
    }
    else {
        let answer = inputNumber - 7;
        if (answer < 7) {
            return answer;
        }
        else {
            return inputNumber * 2;
        }

    }

}
let myNumber = 120;
let numberResult = isLGSeven(myNumber);
console.log(numberResult);

// --------------- third problem solved --------------

// ------------- fourth Program ---------------
function findingBadData(array) {
    let badData = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            badData = badData + 1;
        }

    }
    return badData;
}
let badArray = [34, -34, -2, 53, 64, 23, -2, 3,-34, -23];
let dataResult = findingBadData(badArray);
console.log(dataResult);

// ------------fourth program solved-----------


// ------------ fifth problem --------------
function gemsToDiamond(friend1, friend2, friend3) {
    let fristFriedGemPower = friend1 * 21;
    let secondFriendGemPower = friend2 * 32;
    let thirdFriendGemPower = friend3 * 43;
    let totalGemPower = fristFriedGemPower + secondFriendGemPower + thirdFriendGemPower;
    totalDiamond = totalGemPower;
    if (totalDiamond >= 1000 * 2) {
        let ToDiamonIs = (totalDiamond - 2000);
        return ToDiamonIs;
    }
    else {
        return totalDiamond;
    }

}

let friendUndergems = gemsToDiamond(6,9,5);
console.log(friendUndergems);
// ------------ fifth problem solved -------------- 