let arr = [10, 20, 50, 30, 60, 80, 20, 40, 90, 70]
let largest = arr[0]
let secondLargest = arr[1]

let smallest = arr[0]
let secondSmallest = arr[1]

for (let i = 2 ; i < arr.length ; i++){
    if(arr[i] > largest){
        secondLargest = largest
        largest = arr[i]
    }
    else if(arr[i] > secondLargest){
        secondLargest = arr[i]
    }
    if(arr[i] < smallest){
        secondSmallest = smallest
        smallest = arr[i]
    }
    else if(arr[i] < secondSmallest){
        secondSmallest = arr[i]
    }
}

console.log("Largest is: ", largest)
console.log("Second Largest is: ", secondLargest)
console.log("Smallest is: ", smallest)
console.log("Second Smallest is: ", secondSmallest)