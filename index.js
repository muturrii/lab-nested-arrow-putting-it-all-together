function createLoginTracker(userInfo){
  var attemptcount = 0;

  return (passwordAttempt) => {

    if (passwordAttempt === userInfo.password && attemptcount <= 3){
      return "Login successful"
    }
    attemptcount++
    if(attemptcount >= 4){
      return "Account locked due to too many failed login attempts"
    }else{
      return `Attempt ${attemptcount}: Login failed`
    }
  }
}


// {
//     "username": "user1",
//     "password": "password123"
// }
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};