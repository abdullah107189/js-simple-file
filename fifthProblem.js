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