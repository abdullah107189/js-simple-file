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