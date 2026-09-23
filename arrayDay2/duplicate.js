// let arr = [10, 20, 30, 20, 40, 50, 30, 60, 70, 20]
// let result = []
// for (i = 0 ; i < arr.length ; i++){
    
// let duplicate = false 

// for (j = 0 ; j < result.length ; j++){
//     if (arr[i] == result[j]){
//         duplicate = true
//         break
//     }
//     }

//     if (duplicate == false){
//         result[result.length]=arr[i]
//     }
// }
// console.log(result )



function removeDuplicate(arr){
    let result = []

    for (i = 0 ; i < arr.length ; i++){
        
        let duplicate = false

        for (j = 0 ; j < result.length ; j++){
            if (arr[i] == result[j]){
                duplicate = true
                break
            }
        }

        if (duplicate == false){
            result[result.length] = arr[i]
        }
    }

    return result
}

let arr = [10, 20, 30, 20, 40, 50, 30, 60, 70, 20]
console.log(removeDuplicate(arr))