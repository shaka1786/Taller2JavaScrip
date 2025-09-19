export function Punto9_callbacks() {
  // 1. Creamos las funciones que serán los "callbacks"
  function sumar(a, b) {
    return a + b;
  }

  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  // 2. Creamos la función operar con callback
  function operar(a, b, callback) {
    return callback(a, b);
  }

  // 3. Probamos con cada operación
  const resultadoSuma = operar(5, 3, sumar);          // 8
  const resultadoResta = operar(5, 3, restar);        // 2
  const resultadoMultiplicacion = operar(5, 3, multiplicar); // 15

  return (
    <div>
      <h2>Funciones como Callbacks</h2>
      <p>5 + 3 = {resultadoSuma}</p>
      <p>5 - 3 = {resultadoResta}</p>
      <p>5 × 3 = {resultadoMultiplicacion}</p>
    </div>
  );
}


/*
Un callback es simplemente una función que se pasa como argumento a otra función para que se ejecute después.

En otras palabras:

Una función A recibe otra función B como "invitada".

Luego A decide en qué momento ejecuta a B.
*/