var burguer = document.querySelector("#burguer");
var menu = document.querySelector("#itens");
var pai = burguer.parentNode;

var closer = document.querySelector("#closer")
var body = document.querySelector("body")




burguer.addEventListener("click", function mostrarElementos(){
    menu.style.cssText = "display: flex; transition: 0.5s"
    closer.style.display = "block"
    burguer.style.display = "display: none"
})

    closer.addEventListener("click", function esconderElementos(){
    menu.style.display = "none"
    
})

var lista = document.querySelector(".teste")

function mudarTamanho() {
      if (window.innerWidth >= 769) {
        closer.style.cssText = 'display: hidden; position: absolute'
    }

    }

mudarTamanho()




const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX
    let y = e.pageY

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    
})