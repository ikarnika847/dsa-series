let n = 12345678;
let sum = 0;
while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n/10);
}
console.log("The sum of digits is : ", sum);

// math.floor ka mtlb h kisi bhi decimal value ko roundoff ker dena


// with function
function sumofdigits(n){
    if (n==0)  {
        return 0 ;
    }
    return (n % 10) +sumofdigits(Math.floor(n/10));
}
console.log(sumofdigits(12345678))