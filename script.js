const avanca = document.querySelectorAll(".btn-proximo");
const clickSound = new Audio('click.mp3');

avanca.forEach(button => {
   button.addEventListener("click", function(){
    clickSound.play();
    const atual = document.querySelector(".ativo");
    const proximoPasso = "passo-" + this.getAttribute("data-proximo");

    atual.classList.remove("ativo");
    document.getElementById(proximoPasso).classList.add("ativo");
    })
})      