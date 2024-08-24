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
