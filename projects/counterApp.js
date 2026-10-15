
let count = 0;

function increase() {
    count = count + 1;
    console.log(count);
}

function decrease() {
    count = count - 1;
    console.log(count);
}

function reset() {
    count = 0;
    console.log(count);
}

increase();
increase();
increase();
decrease();
reset();
