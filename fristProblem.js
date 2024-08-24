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