let arr = [1, -2, 3, 0, -4, 5, -6, 0, 7, -8, 9, -10]

let positive = 0
let negative = 0
let zero = 0

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
        positive++;
    }else if(arr[i] < 0){
        negative++;
    }else{
        zero++;
    }
}

console.log("Positive count: ",positive);
console.log("Negative count: ",negative);
console.log("Zero count: ",zero);