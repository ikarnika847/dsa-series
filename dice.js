function dice(n){
  let ans 
  if (n==1)  {
    ans= "one"
  }
  else if (n==2) {
    ans = "two"
  }
  else if (n==3){
    ans = "three"
  }
  else if (n==4){
    ans = "four"
  }
  else if (n==5) {
    ans = "five"
  }
  else if (n==6) {
    ans = "six"
  }
  else {
    ans = "Not A dice Number"
  }
    console.log(ans)
}
dice(5);