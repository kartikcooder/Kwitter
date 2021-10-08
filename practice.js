
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBQoY-moAl3mgUNGo7Hazmb-mULSUgbOs8",
    authDomain: "kwitter-fb2e8.firebaseapp.com",
    databaseURL: "https://kwitter-fb2e8-default-rtdb.firebaseio.com",
    projectId: "kwitter-fb2e8",
    storageBucket: "kwitter-fb2e8.appspot.com",
    messagingSenderId: "574946721262",
    appId: "1:574946721262:web:b7aecc8598e446616fa2ff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}