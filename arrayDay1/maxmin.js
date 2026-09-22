let arr = [10, 20, 50, 30, 60, 80, 20, 40, 90, 70]
let max = arr[0]
let min = arr[0]

for (let i = 1 ; i < arr.length ; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log("Maximum is: ",max);
console.log("Minimum is:", min);

