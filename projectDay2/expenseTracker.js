
const expenses = [
    { title: "Lunch", amount: 150, category: "Food" },
    { title: "Bus Ticket", amount: 50, category: "Travel" },
    { title: "Coffee", amount: 100, category: "Food" },
    { title: "Movie", amount: 250, category: "Entertainment" }
];

// 1. Expense add karna
function addExpense(title, amount, category) {
    const expense = {
        title: title,
        amount: amount,
        category: category
    };

    expenses.push(expense);
    console.log("Expense added successfully!");
}

// 2. Saare expenses show karna
function showExpenses() {
    console.table(expenses);
}

// 3. Total expense calculate karna
function calculateTotal() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    console.log("Total Expense: ₹" + total);
}

// 4. Category ke according filter karna
function filterByCategory(category) {
    const filteredExpenses = expenses.filter(expense => {
        return expense.category === category;
    });

    console.table(filteredExpenses);
}

// 5. Naya expense add karna
addExpense("Shopping", 500, "Personal");

console.log("\nAll Expenses:");
showExpenses();

console.log("\nTotal Expenses:");
calculateTotal();

console.log("\nFood Expenses:");
filterByCategory("Food");
