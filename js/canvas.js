function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function PlayVideo(){
    var v = document.getElementsByTagName("video")[0];
    v.play();
}