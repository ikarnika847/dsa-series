// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let start = 0
// let end = arr.length - 1

// while (start < end){
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp

//     start++
//     end--
// }

// console.log(arr)




function reverse(arr){
    let start = 0
    let end = arr.length - 1

    while (start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }
    return arr
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(reverse(arr))