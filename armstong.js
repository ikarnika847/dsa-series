let n = 153;

let original = n;
let temp = n;
let digits = 0;
let sum = 0;

// Count digits
while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
}

// Calculate Armstrong sum
temp = n;

while (temp > 0) {
    let digit = temp % 10;

    let power = 1;

    // digit^digits
    for (let i = 1; i <= digits; i++) {
        power = power * digit;
    }

    sum = sum + power;

    temp = Math.floor(temp / 10);
}

// Check
if (sum === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}


// 153 = 1^3 + 5^3 + 3^3 = 153