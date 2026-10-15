
let password = "Karnika@123";
let isPasswordVisible = false;

function togglePassword() {
    isPasswordVisible = !isPasswordVisible;

    if (isPasswordVisible) {
        console.log("Password:", password);
    } else {
        console.log("Password:", "*".repeat(password.length));
    }
}

togglePassword(); // Show password
togglePassword(); // Hide password
togglePassword(); // Show password
