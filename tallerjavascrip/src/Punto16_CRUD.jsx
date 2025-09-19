export function Punto16_CRUD() {
  // 📌 1. Arreglo de tareas (inicia vacío)
  let tareas = [];

  // 📌 2. Función CREATE (agregar tarea)
  function crearTarea(titulo) {
    const nuevaTarea = { id: Date.now(), titulo, estado: "pendiente" }; 
    // Date.now() → genera un número único como ID
    tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  // 📌 3. Función READ (listar todas las tareas)
  function leerTareas() {
    return tareas;
  }

  // 📌 4. Función UPDATE (cambiar estado de una tarea)
  function actualizarTarea(id) {
    const tarea = tareas.find(t => t.id === id); 
    if (tarea) {
      // cambiar de pendiente → completada
      tarea.estado = tarea.estado === "pendiente" ? "completada" : "pendiente";
    }
    return tarea;
  }

  // 📌 5. Función DELETE (eliminar una tarea por id)
  function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id); 
    return tareas;
  }

  // 🔹 PRUEBAS DEL CRUD 🔹
  const tarea1 = crearTarea("Estudiar JavaScript");
  const tarea2 = crearTarea("Practicar ejercicios");
  
  const todasLasTareas = leerTareas(); // muestra las 2 tareas

  actualizarTarea(tarea1.id); // cambia estado de la tarea 1
  eliminarTarea(tarea2.id);   // elimina la tarea 2

  return (
    <div>
      <h2>CRUD de Tareas</h2>
      <p><strong>Tarea creada:</strong> {tarea1.titulo} - Estado: {tarea1.estado}</p>
      <p><strong>Todas las tareas:</strong> {todasLasTareas.map(t => t.titulo).join(", ")}</p>
      <p><strong>Tarea después de actualizar:</strong> {tarea1.titulo} - Estado: {tarea1.estado}</p>
      <p><strong>Tareas después de eliminar:</strong> {tareas.map(t => t.titulo).join(", ")}</p>
    </div>
  );
}


/**
 * 
 📝 Explicación

Arreglo tareas = [] → guarda todas las tareas en memoria.

crearTarea → agrega una tarea nueva con ID único.

leerTareas → devuelve todas las tareas guardadas.

actualizarTarea → busca una tarea por ID y cambia su estado.

eliminarTarea → filtra el arreglo quitando la tarea con ese ID.
 */