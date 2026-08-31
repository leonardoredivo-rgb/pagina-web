/*like*/
const botoes = document.querySelectorAll("button");

botoes.forEach(function ("botao"){
    botao.addEventListener("click", botaoclicado);
    function botaoclicado(){
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
    }
})
