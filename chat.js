function join(code){
    open("join.html?room="+code, "_self")
}
function joinroom(){
    join(document.getElementById("join").value);
}
function getQuery(name){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(name);
    return product;
}
function send(roomCode, msg) {
    document.getElementById('messages').innerHTML = "";
    firebase.database().ref('room/' + roomCode).set({
        chat: [msg]
      });
}
function sending(){
    var msg = document.getElementById('exampleInputEmail1').value;
    var roomCode = getQuery('room');
    send(roomCode, msg);
    document.getElementById('exampleInputEmail1').value = "";
}
