export function Punto15_Clases() {
  // 📌 1. Definir la clase
  class Tarea {
    constructor(titulo) {
      // Propiedad: título de la tarea
      this.titulo = titulo;

      // Propiedad: estado inicial (pendiente por defecto)
      this.estado = "pendiente";
    }

    // 📌 2. Método que cambia el estado
    toggleEstado() {
      if (this.estado === "pendiente") {
        this.estado = "completada";
      } else {
        this.estado = "pendiente";
      }
    }
  }

  // 📌 3. Crear un objeto a partir de la clase
  const tarea1 = new Tarea("Estudiar JavaScript");

  // Estado inicial
  const estadoInicial = tarea1.estado; // "pendiente"

  // Usar el método toggleEstado()
  tarea1.toggleEstado(); // ahora pasa a "completada"
  const estadoDespues = tarea1.estado;

  return (
    <div>
      <h2>Clases en JavaScript</h2>
      <p><strong>Tarea:</strong> {tarea1.titulo}</p>
      <p>Estado inicial: {estadoInicial}</p>
      <p>Estado después de usar toggleEstado(): {estadoDespues}</p>
    </div>
  );
}


/*
📝 Explicación con notas

class Tarea { ... } 👉 así se define una clase en JavaScript.

constructor(titulo) 👉 es una función especial que se ejecuta al crear un objeto con new.

Aquí damos valores iniciales (ej: estado = "pendiente").

toggleEstado() 👉 es un método de la clase.

Cambia el estado de "pendiente" a "completada", y viceversa.

new Tarea("Estudiar JS") 👉 crea un nuevo objeto a partir de la clase.
 */