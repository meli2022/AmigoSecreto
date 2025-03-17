// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Expresión regular: Solo letras y espacios
const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
const validarNombre = (nombre) => (nombre === "" || !regex.test(nombre)) ? false : true;

const agregarAmigo = () => {
  const mensaje = document.getElementById("mensaje");
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const nombre = input.value.trim();

  if (!validarNombre(nombre)) {
    mensaje.style.color = "red";
    mensaje.innerHTML = "Los nombres deben tener al menos una letra y puede tener espacios pero no otros caracteres, por ejemplo números."
  } else {
    // Convertir lista actual a un array con nombres en minúsculas
    const nombresExistentes = Array.from(lista.getElementsByTagName("li")).map(
      (li) => li.firstChild.textContent.toLowerCase()
    );

    const existeNombre = nombresExistentes.includes(nombre.toLowerCase());
    if (regex.test(nombre) && !existeNombre) {
      const li = document.createElement("li");
      li.textContent = nombre;

      // Crear botón eliminar con clase
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "❌";
      botonEliminar.classList.add("btn-eliminar");
      botonEliminar.onclick = function () {
        lista.removeChild(li);
      };

      li.classList.add("custom-li");
      li.appendChild(botonEliminar);
      lista.appendChild(li);
       mensaje.style.color = "green";
      mensaje.innerHTML = `${nombre} se ha agregado.`;
      input.value = ""; // Limpia el input solo si es válido
    } else if (existeNombre) {
       mensaje.style.color = "red";
      mensaje.innerHTML = `${nombre} ya se encuentra en la lista.`;
    }
  }
};

const sortearAmigo = () => {
  const resultado = document.getElementById("resultado");
  const lista = document.getElementById("listaAmigos");
  const items = Array.from(lista.getElementsByTagName("li"));
  const largoItems = items.length;

  if (largoItems == 0) {
    resultado.textContent =
      "Para realizar el sorteo debe haber al menos 1 participante";
    resultado.style.color = "red";
  } else {
    const randomIndex = Math.floor(Math.random() * largoItems);
    const itemAleatorio = items[randomIndex];
    resultado.textContent =
      "El amigo sorteado es... " + items[randomIndex].firstChild.textContent;
    // Vaciar la lista
    lista.innerHTML = "";
  }
};