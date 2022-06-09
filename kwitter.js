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

function addUser() {
    user_name = document.getElementById("user_name").value
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html"
}