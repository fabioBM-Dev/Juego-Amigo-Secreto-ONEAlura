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

function lista(){
    //seleccionar elmento <ul>
    const amigos = document.querySelector("listaAmigos");
    
    //recorrer el arreglo usando "for"
        amigosAgregados.forEach (nombreAmigo => {
       //Crear un nuevo elemento <li>
            const itemLista = document.createElement("li");
        //asignar el texto de la array a la lista 
            itemLista.textContent = amigos;
        //agregar el nuevo <li> a la <ul>
            amigos.appendChild(itemLista);
        //
        });
        lista()
   }

  