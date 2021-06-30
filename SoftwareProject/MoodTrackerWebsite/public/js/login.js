firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href = '../main.html';
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function login(){

  var email = document.getElementById('email').value;
  var psw = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, psw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert('Error: ' + errorMessage);
      
    }); 
    
}

// function forgotPsw(){
//   var auth = firebase.auth();
//   var emailAddress = document.getElementById('email').value;

//   auth.sendPasswordResetEmail(emailAddress).then(function() {
//     window.alert('Email has been sent to you!');
//     // Email sent.
//   }).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
        
//     window.alert('Error: ' + errorMessage);
//     // An error happened.
//   });
// }
