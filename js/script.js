var burguer = document.querySelector("#burguer");
var menu = document.querySelector("#itens");
var pai = burguer.parentNode;

var closer = document.querySelector("#closer")
var body = document.querySelector("body")




burguer.addEventListener("click", function mostrarElementos(){
    menu.style.cssText = "display: flex; transition: 0.5s"
    closer.style.display = "block"

})

    closer.addEventListener("click", function esconderElementos(){
    menu.style.display = "none"
    
})

