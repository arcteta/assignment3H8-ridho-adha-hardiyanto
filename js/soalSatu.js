const checkArithmatic = (arr, n) => {
    n = arr.length
    if (n == 1) {
        return true;
    }

    arr.sort((a, b) => { a - b });

    let b = arr[1] - arr[0];

    for (let index = 2; index < n; index++) {
        if (arr[index] - arr[index - 1] != b) {
            return false
        }
    }
    return true;
}

console.log(checkArithmatic([1, 2, 3, 4, 5, 6]));
console.log(checkArithmatic([2, 4, 6, 12, 24]));
console.log(checkArithmatic([2, 4, 6, 8, 10]));
console.log(checkArithmatic([2, 6, 18, 54, 10]));
console.log(checkArithmatic([1, 2, 3, 7, 9]));

