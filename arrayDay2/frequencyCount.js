// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6]
// let frequency = []

// for (let i = 0 ; i < arr.length ; i++){
//     let num = arr[i]
  
//     if(frequency[num] === undefined ){
//         frequency[num] = 1
//     }else{
//         frequency[num] ++
//     }
// }

// console.log(frequency)


function frequencyCount(arr){
    let frequency = []

    for ( let i = 0 ; i < arr.length ; i++){
        let num = arr[i]

        if(frequency[num] === undefined ){
            frequency[num] = 1
        }else{
            frequency[num]++
        }
    }

    return frequency
} 
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6]
console.log(frequencyCount(arr))
