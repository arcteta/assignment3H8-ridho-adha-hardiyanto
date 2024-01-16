const findHighestCountArr = (arr, arrLength) => {

    let maxSum = -9999;
    let currentSum = 0;
    let startIndex = 0;
    let endIndex = arrLength - 1;

    for (let i = 0; i < arrLength; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];

            startIndex = i;
        } else {
            currentSum += arr[i];
        }

        if (maxSum < currentSum){
            maxSum = currentSum

            endIndex = i
        }
    }

    return [arr.slice(startIndex,endIndex), maxSum];

}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3]

console.log(findHighestCountArr(arr, arr.length));