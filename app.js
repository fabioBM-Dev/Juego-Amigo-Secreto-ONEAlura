// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosAgregados = [];

function agregarAmigo() {
    //Selecciona el caMpo y lo guarda en un variable
    let inputAmigo = document.getElementById("amigo");
    if(inputAmigo.value === ""){
        alert("¡¡Por favor ingrese un nombre!!");
    } else {
        //Agrega el valor del campo al array
        amigosAgregados.push(inputAmigo.value);
        //Limpia el campo de textro para el siguiente nombre a ingresar
        inputAmigo.value = "";
        //Activa la función que actualiza la lista de amigos
        actualizarLista();
    }
}

function actualizarLista(){
    //selecciona la lista que queremos intervenir del DOM y se guarda en una variable
    const listaDeAmigos = document.getElementById("listaAmigos")
    //Limpia la lista antes de crear un nuevo elemento
    listaDeAmigos.innerHTML = "";
    //Recorreo el array para inlgresar un <li> a cada elemento
    for (let i = 0; i < amigosAgregados.length; i++) {
        //Crea el elemento <li> en el <Ul>
        const nuevoAmigo = document.createElement ("li");
        //Asigna el nombre del array al elemento <li>
        nuevoAmigo.textContent = amigosAgregados[i];
        //Agrega el nuevo <li> a la lista <ul>
        listaDeAmigos.appendChild(nuevoAmigo)
    } 
}
