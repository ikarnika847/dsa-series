// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 5, 7, 9, 11];

// let result = []
// for(let i = 0 ; i < arr1.length ; i++){
//     for(let j = 0 ; j < arr2.length ; j++){
//         if(arr1[i] === arr2[j]){
//             result[result.length] = arr1[i]
//         }
//     }
// }

// console.log(result)



function intersection(arr1, arr2) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        let found = false;

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }

        if (found === true) {
            result[result.length] = arr1[i];
        }
    }

    return result;
}

console.log(intersection([1, 2, 3, 4], [2, 4, 6]));
