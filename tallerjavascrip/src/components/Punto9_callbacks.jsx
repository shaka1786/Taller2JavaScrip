// 📌 Archivo: Punto9_Callbacks.jsx
// Recuerda que este archivo se importa en App.jsx para verlo en Vite

export function Punto9_Callbacks() {
  /*
   ==========================================================
   9. Funciones como callbacks
   Pregunta:
   Crea una función operar(a, b, callback) que pueda recibir 
   distintas funciones (sumar, restar, multiplicar) y ejecute 
   la operación.
   ==========================================================
  */

  // 👉 1. Creamos funciones normales para operaciones matemáticas
  // (estas funciones serán los "callbacks")
  function sumar(a, b) {
    return a + b; // retorna la suma
  }

  function restar(a, b) {
    return a - b; // retorna la resta
  }

  function multiplicar(a, b) {
    return a * b; // retorna la multiplicación
  }

  /*
   👉 2. Creamos la función "operar"
   - Recibe 2 números (a y b).
   - Recibe también una función (callback).
   - "callback" es simplemente otra función que se pasa como argumento.
   - Al final, ejecutamos esa función con los números.
  */
  function operar(a, b, callback) {
    return callback(a, b); // ejecuta la función que pasamos como parámetro
  }

  /*
   👉 3. Probamos la función "operar" con los diferentes callbacks
   - Le pasamos (5, 3, sumar)
   - Le pasamos (5, 3, restar)
   - Le pasamos (5, 3, multiplicar)
  */
  const resultadoSuma = operar(5, 3, sumar); // 8
  const resultadoResta = operar(5, 3, restar); // 2
  const resultadoMultiplicacion = operar(5, 3, multiplicar); // 15

  // 👉 4. Mostramos todo en pantalla
  return (
    <div>
      {/* Mostramos la pregunta */}
      <h2>9. Funciones como callbacks</h2>
      <p>
        Crea una función <strong>operar(a, b, callback)</strong> que pueda
        recibir distintas funciones (sumar, restar, multiplicar) y ejecute la
        operación.
      </p>

      {/* Mostramos los resultados */}
      <h3>Resultados:</h3>
      <p>5 + 3 = {resultadoSuma}</p>
      <p>5 - 3 = {resultadoResta}</p>
      <p>5 × 3 = {resultadoMultiplicacion}</p>
    </div>
  );
}

/*
 📌 NOTAS IMPORTANTES PARA PRINCIPIANTES
 - Un "callback" es solo una función que se pasa como argumento a otra función.
 - Ejemplo en español:
   "operar" es como un chef.
   "sumar, restar o multiplicar" son recetas que el chef recibe.
   El chef (operar) no sabe cocinar nada por sí mismo,
   pero si le damos una receta (callback), él la sigue y cocina.
 - Esto es muy usado en JavaScript, sobre todo en cosas como eventos, 
   temporizadores y programación asincrónica.
*/
