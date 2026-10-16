function genrateOTP(){
    return String(Math.floor(100000 + Math.random() * 900000)).padStart(6 , "0")

}

function verifyOTP(correctOTP, enteredOTP){
    if(correctOTP === enteredOTP){
        console.log("OTP is correct")
    }else{
        console.log("OTP is incorrect")
    }
}


// genrate otp
let otp = genrateOTP()
console.log(otp)

// enter otp here for testing
let enteredOtp = 123456
verifyOTP(otp, enteredOtp)

// verify otp
verifyOTP(otp, enteredOtp)