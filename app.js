// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosAgregados = ["FABIO","NELSON", "ALEX", "GLORIA", "MARIA" ];

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

//Genera el numero aleatorio basado el lenght del array
function sortearAmigo(){
    if (amigosAgregados.length < 2){
        alert("!!Debes ingresar por lo menos 2 nombres de amigos¡¡");
    } else {
        let nombresSorteados = [];
        var indiceAleatorio = Math.floor(Math.random()*amigosAgregados.length);
        if (nombresSorteados.includes(indiceAleatorio)) {
            indiceAleatorio
        } else {
            nombresSorteados.push(indiceAleatorio)
        }
        //muestra el resultado del amigo elegido aleatoriamente en el DOM
        const resultado = document.getElementById("resultado")
            //ingresa el nombre de la lista 
        resultado.innerHTML = `FELICIDADES, TU AMIGO SECRETO ES "${amigosAgregados[indiceAleatorio]}"`;
        console.log(`Tu amigo secreto es: ${amigosAgregados[indiceAleatorio]}`);
        
    }

}
