let arr = [1,2,3,4,5]
let sum = 0
let count = 0

for(let i = 0 ; i < arr.length ; i++){
    sum = sum + arr[i] 
    count = count + 1 
}  
console.log("SUM is = ", sum)  

let average = sum/count
console.log("Average is = " , average) 