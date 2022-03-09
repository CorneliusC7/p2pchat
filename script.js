function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  
function newroom(){
    open("room.html", "_self")
}
function join(code){
    if(code == "" || code.length < 6){
        alert("Please enter a room code");
    }else{
        open("join.html?room="+code, "_self");
    }
}
function joinroom(){
    join(document.getElementById("join").value);
}
function create(roomName, roomCode) {
    if(roomName == "" || roomCode == "" || isNumeric(roomCode) == false || roomCode.length < 6){
        alert("Please enter a room name and room code");
    }
    else{
        firebase.database().ref('room/' + roomCode).set({
            roomName: roomName,
            roomCode: roomCode,
            chat: ["Welcome to the room!"]
        });
        localStorage.setItem("room", roomName);
        show();
        setTimeout(function(){
            join(roomCode);
        },2000)
    }
}
function createroom(){
    var roomName = document.getElementById("room_name").value;
    var roomCode = document.getElementById("room_code").value;
    create(roomName, roomCode);
}
function hides(){
    document.getElementById("hides").style.display = "none";
}
function show(){
    document.getElementById("hides").style.display = "block";
}
function source(){
    open("https://github.com/CorneliusC7/p2pchat")
}
