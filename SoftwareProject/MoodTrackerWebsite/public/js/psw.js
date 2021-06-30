function forgotPsw(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById('email').value;
  
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      window.alert('Email has been sent to you!');
      // Email sent.
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
          
      window.alert('Error: ' + errorMessage);
      // An error happened.
    });
  }