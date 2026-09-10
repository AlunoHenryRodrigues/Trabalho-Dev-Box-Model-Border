const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");
const texto = document.getElementById("texto-box-model");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");

const textoOriginal = texto.textContent;
const textoNovo = 'Essas áreas do box model são feitas de dentro para fora, começando com o conteúdo real do elemento na content box, essa área geralmente contém um fundo, cor da fonte ou uma imagem, seguida da área de padding ou preenchimento onde a área de conteúdo se estende e ela vai até área de border.';

let jaClicou = false;

function avancar() {
    if (!jaClicou) {
        c1.classList.remove("reverso");
        c2.classList.remove("reverso");
        c3.classList.remove("reverso");
        c4.classList.remove("reverso");

        c1.classList.add("animar");
        c2.classList.add("animar");
        c3.classList.add("animar");
        c4.classList.add("animar");

        texto.textContent = textoNovo;
        jaClicou = true;
    } else {
        window.top.location.href = "slide2.html";
    }
}

function voltar() {
    if (jaClicou) {
        c1.classList.remove("animar");
        c2.classList.remove("animar");
        c3.classList.remove("animar");
        c4.classList.remove("animar");

        c1.classList.add("reverso");
        c2.classList.add("reverso");
        c3.classList.add("reverso");
        c4.classList.add("reverso");

        texto.textContent = textoOriginal;
        jaClicou = false;
    } else {
        window.top.location.href = "capa.html"; 
    }
}

direita.addEventListener("click", avancar);
esquerda.addEventListener("click", voltar);

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        avancar();
    } else if (event.key === "ArrowLeft") {
        voltar();
    }
});