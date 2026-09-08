//entrada
const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");
 
 
//processamentos e funções
 
//botão direito
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide7.html"
    }
})
 
direita.addEventListener("click", function(){
    window.location.href = "slide7.html"
});



//botao esquerdo
document.addEventListener("keydown", function(event){

    if (event.key === "ArrowLeft"){

        window.location.href = "slide5.html"

    }

})

esquerda.addEventListener("click", function(){

    window.location.href = "slide5.html"

});