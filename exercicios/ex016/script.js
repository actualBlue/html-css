function abrir() {
    document.getElementById("janela").style.display = "block"
    document.getElementById("fundo").classList.add("blur")

}

function fechar() {
     document.getElementById("janela").style.display = "none"
     document.getElementById("fundo").classList.remove("blur")
}