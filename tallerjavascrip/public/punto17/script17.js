// ==============================
// script.js
// Ejemplo simple y comentado
// ==============================

// 1) Arreglo con tareas (esto "simula" datos en memoria)
const tareas = [
  { id: 1, titulo: "Estudiar JavaScript", estado: "pendiente" },
  { id: 2, titulo: "Hacer ejercicios", estado: "completada" },
  { id: 3, titulo: "Leer documentación de Vite", estado: "pendiente" }
];

// 2) Seleccionamos el contenedor root donde vamos a renderizar todo
const root = document.getElementById("root");

// 3) Creamos una función que renderiza la interfaz
function render() {
  // Limpiar lo que haya en root (si re-renderizamos)
  root.innerHTML = "";

  // --- Opcional: formulario simple para agregar tareas ---
  const form = document.createElement("div");

  // Input para nuevo título
  const inputNuevo = document.createElement("input");
  inputNuevo.type = "text";
  inputNuevo.placeholder = "Nueva tarea...";
  inputNuevo.id = "input-nueva-tarea";

  // Botón para agregar
  const btnAgregar = document.createElement("button");
  btnAgregar.textContent = "Agregar";

  // Cuando el usuario hace click en Agregar
  btnAgregar.addEventListener("click", () => {
    const titulo = inputNuevo.value.trim();
    if (titulo === "") {
      alert("Escribe un título para la tarea.");
      return;
    }
    // Crear nueva tarea con id único (Date.now() sirve para practicar)
    const nueva = { id: Date.now(), titulo, estado: "pendiente" };
    tareas.push(nueva);      // la agregamos al arreglo en memoria
    inputNuevo.value = "";   // limpiamos input
    render();                // re-renderizamos para ver cambios
  });

  form.appendChild(inputNuevo);
  form.appendChild(btnAgregar);

  root.appendChild(form);

  // --- Lista (ul) que contendrá las tareas ---
  const lista = document.createElement("ul");

  // Recorremos el arreglo de tareas y creamos un <li> por cada una
  for (const tarea of tareas) {
    const li = document.createElement("li");

    // Texto de la tarea
    const texto = document.createElement("span");
    texto.textContent = tarea.titulo;

    // Si la tarea está completada, le ponemos una clase para tacharla
    if (tarea.estado === "completada") {
      texto.classList.add("completada");
    }

    // Botón para alternar estado (pendiente <-> completada)
    const btnToggle = document.createElement("button");
    btnToggle.textContent = tarea.estado === "pendiente" ? "Marcar completada" : "Marcar pendiente";
    btnToggle.addEventListener("click", () => {
      tarea.estado = tarea.estado === "pendiente" ? "completada" : "pendiente";
      render(); // re-render para actualizar la vista
    });

    // Botón para eliminar la tarea
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      // Filtramos el arreglo para quitar la tarea con ese id
      const index = tareas.findIndex(t => t.id === tarea.id);
      if (index > -1) {
        tareas.splice(index, 1); // quitamos 1 elemento a partir del index
        render();
      }
    });

    // Armamos el li
    li.appendChild(texto);
    li.appendChild(btnToggle);
    li.appendChild(btnEliminar);

    // Añadimos el li a la ul
    lista.appendChild(li);
  }

  // Si no hay tareas, mostramos un mensaje
  if (tareas.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No hay tareas. Agrega una nueva arriba.";
    root.appendChild(msg);
  } else {
    root.appendChild(lista);
  }
}

// 4) Llamamos por primera vez para pintar la UI
render();
