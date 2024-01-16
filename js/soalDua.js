const threeStepsAB = (inputUser) => {

    let tampArr = inputUser.split("")

    for (let i = 0; i < inputUser.length; i++) {
        if (tampArr[i] === 'a' || tampArr[i] === 'A') {
            if (tampArr[i + 4] === 'b' || tampArr[i + 4] === 'B') {
                return true
            }
        } else if (tampArr[i] === 'b' || tampArr[i] === 'B') {
            if (tampArr[i + 4] === 'a' || tampArr[i + 4] === 'A') {
                return true
            }
        }
    }
    return false;

}

const test1 = "lane borrowed";
const test2 = "i am sick";
const test3 = "you are boring";
const test4 = "barbarian";
const test5 = "beacon and meat";

console.log(threeStepsAB(test1));
console.log(threeStepsAB(test2));
console.log(threeStepsAB(test3));
console.log(threeStepsAB(test4));
console.log(threeStepsAB(test5));