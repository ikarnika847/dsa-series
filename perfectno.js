let n = 28
let sum = 0

for (let i = 1 ; i < n ; i++) {
    if (n % i === 0) {
        sum = sum + i
    }
}

if (sum === n) {
    console.log("The number is perfect")    
}



// Number = 28

// i = 1  → 28 % 1 = 0 → sum = 1
// i = 2  → 28 % 2 = 0 → sum = 3
// i = 3  → 28 % 3 ≠ 0
// i = 4  → 28 % 4 = 0 → sum = 7
// ...
// i = 14 → 28 % 14 = 0 → sum = 28

// sum == number
// → Perfect Number




// 6 ke divisors:

// 1, 2, 3, 6

// 6 ko exclude karenge:

// 1 + 2 + 3 = 6

// Isliye 6 Perfect Number hai.

// 4
// Kuch Perfect Numbers

// 6, 28, 496, 8128...

// For example 28:

// 1 + 2 + 4 + 7 + 14 = 28