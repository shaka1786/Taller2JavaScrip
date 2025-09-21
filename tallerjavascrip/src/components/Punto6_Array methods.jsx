// 📌 Archivo: Punto6_Array_methods.jsx
// Tema: Métodos de arreglos encadenados (.filter() y .map())

export  function Punto6_Array_methods() {
  // ==============================
  // 🔹 Pregunta del taller:
  // Dado el arreglo:
  // let numeros = [3, 8, 12, 5, 20, 7];
  // Obtén el doble de los números mayores que 6 usando
  // .filter() y .map() encadenados.
  // ==============================

  // Arreglo original
  let numeros = [3, 8, 12, 5, 20, 7];

  // ==============================
  // 🔹 Paso 1: filter()
  // Recorre el arreglo y se queda solo con los que cumplen la condición
  // En este caso: n > 6 (mayores que 6)
  // 🔹 Paso 2: map()
  // A cada elemento que quedó, le aplicamos una transformación
  // En este caso: n * 2 (su doble)
  // ==============================
  let resultado = numeros
    .filter(function (n) {
      return n > 6; // Solo pasa si es mayor a 6
    })
    .map(function (n) {
      return n * 2; // Transformamos al doble
    });

  // ==============================
  // Lo que se mostrará en la página
  // ==============================
  return (
    <div>
      {/* Pregunta en pantalla */}
      <h2>Pregunta 6: Array methods encadenados</h2>
      <p>
        Dado el arreglo <code>[3, 8, 12, 5, 20, 7]</code>, obtén el <br />
        <strong>doble</strong> de los números mayores que <strong>6</strong> usando{" "}
        <code>.filter()</code> y <code>.map()</code> encadenados.
      </p>

      <hr />

      {/* Solución */}
      <h3>Solución:</h3>
      <p>
        <strong>Números originales:</strong> {numeros.join(", ")}
      </p>
      <p>
        <strong>Doble de los mayores que 6:</strong> {resultado.join(", ")}
      </p>
    </div>
  );
}
