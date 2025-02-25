// Array para almacenar los nombres de los amigos
let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor del input
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar nombre a la lista si no está duplicado
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);

    // Crear un nuevo elemento de lista y agregarlo al UL
    let listaElement = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaElement.appendChild(nuevoElemento);

    // Limpiar el input después de agregar el nombre
    inputNombre.value = "";
}

function sortearAmigo() {
    // Validar si hay nombres en la lista
    if (listaAmigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    // Seleccionar un nombre aleatoriamente
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
