var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyAq_wj7xyQIIjUIk5zT0rWf7EXDagmcYEo",
    authDomain: "roll-landing-page.firebaseapp.com",
    projectId: "roll-landing-page",
    storageBucket: "roll-landing-page.appspot.com",
    messagingSenderId: "143368144127",
    appId: "1:143368144127:web:d46bb2d3a360ae4a48f8ca",
    measurementId: "G-GRV9G7LR04"
  };
  // Initialize Firebase
  if(!hasInit){
      firebase.initializeApp(firebaseConfig);
 hasInit = true; 
}


function signOut(){
  firebase.auth().signOut()
  .then(function() {
    alert("Logged Out Successfully");
    window.location.replace("index.html");
  })
  .catch(function(error) {
    // An error happened
  });

  }

 