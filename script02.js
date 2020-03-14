function definirFundo(){
    var paragrafos = document.getElementsByTagName("p");
    var cores = ["blue", "red", "green"];
    var i;

    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].style.backgroundColor = cores[i];
    }
}