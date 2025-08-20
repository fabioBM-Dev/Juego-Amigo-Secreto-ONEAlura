// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosAgregados = [];
console.log(amigosAgregados)

function agregarAmigo() {
    document.getElementById("amigo");
    if(document.getElementById("amigo").value =""){
        alert("Por favor, ingrese unnombre");
    } else {
        amigosAgregados.push(document.getElementById("amigo").value)
    }
}