
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyB7eqCCMI5xjckwull8tn52oihCDK4LNYw",
    authDomain: "kwitter-19b19.firebaseapp.com",
    databaseURL: "https://kwitter-19b19-default-rtdb.firebaseio.com",
    projectId: "kwitter-19b19",
    storageBucket: "kwitter-19b19.appspot.com",
    messagingSenderId: "74458220368",
    appId: "1:74458220368:web:b5ae37039f068aac6a0e55"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
    });
  }