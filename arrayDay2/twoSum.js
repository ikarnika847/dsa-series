// let arr = [2 , 7 , 11 , 15 , 3 , 6 , 8]
// let target = 9

// let answer = []

// for (let i = 0 ; i < arr.length ; i++){
//     for (let j = i + 1 ; j < arr.length ; j++){
//         if (arr[i] + arr[j] == target){
//             answer[0] = arr[i]
//             answer[1] = arr[j]
//             break
//         }
//     }

//     if(answer.length === 2){
//         break
//     }
// }

// console.log(answer)



function twoSum(arr, target) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == target) {

                answer[answer.length] = [arr[i], arr[j]];
            }
        }
    }

    return answer;
}

let arr = [2, 7, 11, 15, 3, 6, 8];
let target = 9;

console.log(twoSum(arr, target));
    