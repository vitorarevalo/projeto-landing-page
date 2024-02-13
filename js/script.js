var burguer = document.querySelector("#burguer");
var menu = document.querySelector("#itens");
var pai = burguer.parentNode;

var closer = document.querySelector("#closer")





burguer.addEventListener("click", function mostrarElementos(){
    menu.style.cssText = "display: flex;"
    closer.style.display = "block"
})


closer.addEventListener("click", function esconderElementos(){
    menu.style.display = "none"
})
