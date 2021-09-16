// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCj2GY-tMJONqIxeoTSs8vH2aqYw2Y3Sfw",
      authDomain: "projectletschat.firebaseapp.com",
      projectId: "projectletschat",
      databaseURL: "https://projectletschat-default-rtdb.firebaseio.com",
      storageBucket: "projectletschat.appspot.com",
      messagingSenderId: "1000161968014",
      appId: "1:1000161968014:web:9c7fc925dd3aa2baf26edf"
      
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose: "adding user"
      })
}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}