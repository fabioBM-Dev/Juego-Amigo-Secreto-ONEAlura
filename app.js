// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosAgregados = [];

function agregarAmigo() {
    document.getElementById("amigo");
    if(document.getElementById("amigo").value ==""){
        alert("Por favor ingrese un nombre");
    } else {
        amigosAgregados.push(document.getElementById("amigo").value);
    }
     document.getElementById("amigo").value = "";
}