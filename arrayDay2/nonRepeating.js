// let arr = [4, 5, 1, 2, 1, 4, 5];

// let freq = {};

// for (let i = 0; i < arr.length; i++) {

//     let value = arr[i];

//     if (freq[value] === undefined) {
//         freq[value] = 1;
//     }
//     else {
//         freq[value]++;
//     }
// }

// let answer = -1;

// for (let i = 0; i < arr.length; i++) {

//     if (freq[arr[i]] === 1) {
//         answer = arr[i];
//         break;
//     }
// }

// console.log(answer);



function firstNonRepeating(arr){
    let freq = {}

    for(let i = 0 ; i < arr.length ; i++){
        let value = arr[i]
        if(freq[value] === undefined){
            freq[value] = 1
        }else{
            freq[value]++
        }
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(freq[arr[i]] === 1){
            return arr[i]
        }
    }

    return -1
}

let arr = [4, 5, 1, 2, 1, 4, 5]
console.log(firstNonRepeating(arr))