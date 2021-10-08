
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"})

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}