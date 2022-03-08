function newroom(){
    open("room.html", "_self")
}
function join(code){
    open("join.html?room="+code, "_self")
}
function joinroom(){
    join(document.getElementById("join").value);
}
function create(roomName, roomCode) {
    firebase.database().ref('room/' + roomCode).set({
      roomName: roomName,
      roomCode: roomCode,
      chat: ["Welcome to the room!"]
    });
    show();
    setTimeout(function(){
        join(roomCode);
    },2000)
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
