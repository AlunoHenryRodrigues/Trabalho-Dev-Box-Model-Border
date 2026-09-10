//entrada
const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");


//processamentos e funções
 
//botão direito
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide8.html"
    }
})
 
direita.addEventListener("click", function(){
    window.location.href = "slide8.html"
});



//botao esquerdo
document.addEventListener("keydown", function(event){

    if (event.key === "ArrowLeft"){

        window.location.href = "slide6.html"

    }

})

esquerda.addEventListener("click", function(){

    window.location.href = "slide6.html"

});
