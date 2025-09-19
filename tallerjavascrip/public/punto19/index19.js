// Arreglo inicial de tareas
let tareas = [
  { id: 1, titulo: "Aprender JavaScript", completada: false },
  { id: 2, titulo: "Practicar CSS", completada: true },
  { id: 3, titulo: "Hacer ejercicios", completada: false }
];

// Seleccionamos root
const root = document.getElementById("root");

// Crear <ul> una sola vez
const ul = document.createElement("ul");
root.appendChild(ul);

// --- Delegación de eventos ---
// Solo un listener en el <ul>
ul.addEventListener("click", (evento) => {
  // Verificar si el clic vino de un botón
  if (evento.target.tagName === "BUTTON") {
    const id = parseInt(evento.target.dataset.id); // obtener id desde data-id

    // Filtrar tareas (eliminar la que coincide)
    tareas = tareas.filter(t => t.id !== id);

    // Volver a pintar
    renderizarTareas();
  }
});

// Función para renderizar la lista
function renderizarTareas() {
  // Limpiar contenido
  ul.innerHTML = "";

  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;

    if (tarea.completada) {
      li.classList.add("completada");
    }

    // Crear botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // Guardamos el id en un atributo personalizado
    btnEliminar.dataset.id = tarea.id;

    li.appendChild(btnEliminar);
    ul.appendChild(li);
  });
}

// Pintamos al inicio
renderizarTareas();


/*

🔎 Explicación (para principiantes)

Antes, cada botón tenía su propio addEventListener.

Ahora, solo hay un evento en el <ul> → ul.addEventListener("click", ...).

Dentro del evento, preguntamos:

evento.target.tagName === "BUTTON" → significa que el clic vino de un botón.

El dataset.id nos dice qué tarea eliminar.

Eliminamos con filter() y repintamos la lista.

 */