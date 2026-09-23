// let arr = [2 , 1 , 0 , 3 , 0 , 4 , 5 ]

// let count0 = 0
// let count1 = 0
// let count2 = 0

// for (let i = 0 ; i < arr.length ; i++){
//     if (arr[i] == 0 ){
//         count0++
//     }else if (arr[i] == 1){
//         count1++
//     }else{
//         count2++
//     }
// }

// let index = 0

// for(let i = 0 ; i < count0 ; i++){
//     arr[index] = 0
//     index++
// }
// for(let i = 0 ; i < count1 ; i++){
//     arr[index] = 1
//     index++
// }
// for(let i = 0 ; i < count2 ; i++){
//     arr[index] = 2
//     index++
// }

// console.log(arr)





function sort(arr){

    let count0 = 0
    let count1 = 0
    let count2 = 0

    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] == 0 ){
            count0++
        }else if (arr[i] == 1){
            count1++
        }else{
            count2++
        }
    }
    
    let index = 0

    for(let i = 0 ; i < count0 ; i++){
        arr[index] = 0
        index++
    }
    for(let i = 0 ; i < count1 ; i++){
        arr[index] = 1
        index++
    }
    for(let i = 0 ; i < count2 ; i++){
        arr[index] = 2
        index++
    }
    return arr

}

let arr = [2 , 1 , 0 , 3 , 0 , 4 , 5 ]
console.log(sort(arr))