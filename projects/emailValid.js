let email = "karnika@gmail.com"

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

if(isValidEmail(email)){
    console.log("Email is valid");
}else{
    console.log("Email is invalid");
}
