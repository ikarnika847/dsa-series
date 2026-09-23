// let arr = [1 , 2 , 4 , 5 , 6]

// let n = 6;

// let expectedSum = 0;
// let actualSum = 0;

// for(let i = 0; i <= n; i++){
//     expectedSum += i;
// }

// for(let i = 0; i < arr.length; i++){
//     actualSum += arr[i];
// }

// let missing = expectedSum - actualSum;

// console.log("Missing number is: ", missing);


// function findMissingNumber(arr, n) {

//     let expectedSum = 0;
//     let actualSum = 0;

//     for (let i = 1; i <= n; i++) {
//         expectedSum = expectedSum + i;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         actualSum = actualSum + arr[i];
//     }

//     return expectedSum - actualSum;
// }

// let arr = [1, 2, 3, 5];

// console.log(findMissingNumber(arr, 5));





function findMissingNumber(arr, n) {

    let expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum = actualSum + arr[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));