function aparecer(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;

    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].style.display = "block";
    }
}
function desaparecer(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;

    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].style.display = "none";
    }
}