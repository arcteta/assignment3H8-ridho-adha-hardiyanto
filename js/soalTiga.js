const countSumArr = (arr, testCase) => {

    let expected = testCase

    const sortedArr = arr.sort((a, b) => { return a - b });

    let arrCollection = [];

    for (let i = 0; i < sortedArr.length; i++) {
        
        for (let j = i + 1; j < sortedArr.length; j++) {
            let tampArrJ = sortedArr[i] + sortedArr[j];
            if (tampArrJ === expected) {
                arrCollection.push([sortedArr[i], sortedArr[j]])
            }
        }
    }
    return arrCollection;
}

const arr = [2, 1, 4, 3];


console.log(countSumArr(arr, 5));