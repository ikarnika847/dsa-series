
const students = [
    { name: "Aman", age: 21, marks: 75 },
    { name: "Priya", age: 20, marks: 92 },
    { name: "Rahul", age: 22, marks: 60 },
    { name: "Neha", age: 21, marks: 85 },
    { name: "Karan", age: 19, marks: 70 }
];

// 1. Table print karne ka function
function displayStudents(data) {
    console.table(data);
}

// 2. Marks ke according sorting
function sortByMarks(data, order = "asc") {
    return [...data].sort((a, b) => {
        if (order === "asc") {
            return a.marks - b.marks;
        }

        return b.marks - a.marks;
    });
}

// 3. Marks ke according filtering
function filterByMarks(data, minimumMarks) {
    return data.filter(student => student.marks >= minimumMarks);
}

console.log("Original Student Table:");
displayStudents(students);

console.log("Marks: Ascending Order");
displayStudents(sortByMarks(students, "asc"));

console.log("Marks: Descending Order");
displayStudents(sortByMarks(students, "desc"));

console.log("Students with marks >= 80:");
displayStudents(filterByMarks(students, 80));
