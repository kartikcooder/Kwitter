//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBQoY-moAl3mgUNGo7Hazmb-mULSUgbOs8",
      authDomain: "kwitter-fb2e8.firebaseapp.com",
      databaseURL: "https://kwitter-fb2e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb2e8",
      storageBucket: "kwitter-fb2e8.appspot.com",
      messagingSenderId: "574946721262",
      appId: "1:574946721262:web:b7aecc8598e446616fa2ff"
    };
    const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name, message:msg, like:0})
      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}