var firebaseConfig = {
      apiKey: "AIzaSyBZuMJCb1dArUf9PrNzzlyPlwA1c2oAlP4",
      authDomain: "kwitter-61381.firebaseapp.com",
      databaseURL: "https://kwitter-61381-default-rtdb.firebaseio.com",
      projectId: "kwitter-61381",
      storageBucket: "kwitter-61381.appspot.com",
      messagingSenderId: "243822369407",
      appId: "1:243822369407:web:d84da4916d016c3898fd4a",
      measurementId: "G-494DVZ1CZ7"
    };
    
    firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function AddRoom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}


function logOut() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}

function redirectToRoomName(name) {
      console.log("name")
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}