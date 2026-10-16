
let marks = [85, 76, 92, 68, 79];

let total = 0;
let maxMarks = marks.length * 100;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let percentage = (total / maxMarks) * 100;
let grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Total Marks:", total, "/", maxMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
