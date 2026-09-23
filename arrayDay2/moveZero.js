// let arr = [1 , 0 , 2 , 0 , 3 , 0 , 4 , 0 , 5]

// let position = 0

// // non zero element are placed at starting position
// for (let i = 0 ; i < arr.length ; i++){
//     if (arr[i] != 0 ){
//         arr[position] = arr[i]
//         position++
//     }
// }

// // fill remaining position with 0
// while(position < arr.length){
//     arr[position] = 0
//     position++
// }
// console.log(arr)



function moveZero(arr){
    let position = 0

// non zero element are placed at starting position
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] != 0 ){
        arr[position] = arr[i]
        position++
    }
}

// fill remaining position with 0
while(position < arr.length){
    arr[position] = 0
    position++
}
return arr
}

let arr = [1 , 0 , 2 , 0 , 3 , 0 , 4 , 0 , 5]
console.log(moveZero(arr))