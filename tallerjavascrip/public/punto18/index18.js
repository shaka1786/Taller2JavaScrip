// Arreglo de tareas iniciales
let tareas = [
  { id: 1, titulo: "Aprender JavaScript", completada: false },
  { id: 2, titulo: "Practicar CSS", completada: true },
  { id: 3, titulo: "Hacer ejercicios", completada: false }
];

// Seleccionamos el div root
const root = document.getElementById("root");

// Función que "pinta" la lista en pantalla
function renderizarTareas() {
  // Limpiar el contenido anterior
  root.innerHTML = "";

  // Crear un <ul>
  const ul = document.createElement("ul");

  // Recorremos el arreglo de tareas
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;

    // Si está completada, aplicar estilo
    if (tarea.completada) {
      li.classList.add("completada");
    }

    // Crear botón "Eliminar"
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // Evento al hacer clic → borra la tarea
    btnEliminar.addEventListener("click", () => {
      // Filtramos el arreglo para quitar esa tarea
      tareas = tareas.filter(t => t.id !== tarea.id);

      // Volvemos a pintar la lista
      renderizarTareas();
    });

    // Agregar el botón al <li>
    li.appendChild(btnEliminar);

    // Agregar el <li> al <ul>
    ul.appendChild(li);
  });

  // Insertar el <ul> dentro de root
  root.appendChild(ul);
}

// Ejecutamos la función al inicio
renderizarTareas();
