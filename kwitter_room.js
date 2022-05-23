var firebaseConfig = {
      apiKey: "AIzaSyBVqeSEOcFyH9AHnrSsgIhj3VXkBXfxGJw",
      authDomain: "yuber-cab-91820.firebaseapp.com",
      databaseURL: "https://yuber-cab-91820-default-rtdb.firebaseio.com",
      projectId: "yuber-cab-91820",
      storageBucket: "yuber-cab-91820.appspot.com",
      messagingSenderId: "167435092192",
      appId: "1:167435092192:web:9fca0b185542d02401d085"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_room.html";

        firebase.database().ref("/").child(room_name).update({

          purpose: "Adding Room Name"

        })
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;

           console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


        });
      });
    
    }
    
    getData();


    function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";


}
var firebaseConfig = {
  apiKey: "AIzaSyBVqeSEOcFyH9AHnrSsgIhj3VXkBXfxGJw",
  authDomain: "yuber-cab-91820.firebaseapp.com",
  databaseURL: "https://yuber-cab-91820-default-rtdb.firebaseio.com",
  projectId: "yuber-cab-91820",
  storageBucket: "yuber-cab-91820.appspot.com",
  messagingSenderId: "167435092192",
  appId: "1:167435092192:web:9fca0b185542d02401d085"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("Room name -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;


  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";


}