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

function logOut() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value="";
}

function redirectToRoomName(name) {
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
}