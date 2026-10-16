function showToast(message, type = "success") {
    console.log(type.toUpperCase() + ": " + message)


setTimeout (function() {
    console.log("Toast notification hidden")
} , 2000) 

}
showToast("Profile updated successfully")
