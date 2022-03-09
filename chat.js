setTimeout(function(){
    document.querySelector("body > nav > div > a").innerHTML = localStorage.getItem('room') + "'s Room";
},1)
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
    var msgsafe = msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encrypted = CryptoJS.AES.encrypt(msgsafe, document.getElementById('pwpw').value.toString());
    var encrypt = encrypted.toString();
    var roomCode = getQuery('room');
    send(roomCode, encrypt);
    document.getElementById('exampleInputEmail1').value = "";
}
