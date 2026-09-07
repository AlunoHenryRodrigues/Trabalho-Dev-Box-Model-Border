//entrada
const direita = document.getElementById("direita");
 
 
 
//processamentos e funções
 
//botão direito
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "boxmodel.html"
    }
})
 
direita.addEventListener("click", function(){
    window.location.href = "boxmodel.html"
});