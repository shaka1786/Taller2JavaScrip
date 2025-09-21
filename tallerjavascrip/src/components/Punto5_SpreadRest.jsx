// 📌 Archivo: Punto5_SpreadRest.jsx
// Tema: Operadores Spread (...) y Rest (...)
// Ambos usan los "3 punticos" pero sirven para cosas distintas:
// 🔹 Spread → "esparcir" un objeto/arreglo (clonar y extender).
// 🔹 Rest → "juntar" muchos argumentos en un solo arreglo.

export function Punto5_SpreadRest() {
  // ==============================
  // 🔹 Pregunta del taller:
  // • Usa spread para clonar y extender un objeto de configuración.
  // • Usa rest para crear una función que reciba números infinitos y devuelva su promedio.
  // ==============================

  // ==== SPREAD ====
  // Objeto original
  const config = {
    tema: "oscuro",
    idioma: "es"
  };

  // Usamos spread (...) para copiar todas las propiedades de config
  // y además agregamos una nueva propiedad (version).
  const nuevaConfig = {
    ...config, // copia tema y idioma
    version: "1.0" // añadimos algo nuevo
  };

  // ==== REST ====
  // Función que recibe "muchos números"
  // Con ...numeros juntamos todos los argumentos en un arreglo.
  function promedio(...numeros) {
    let suma = 0;

    // Recorremos cada número con un for normal (básico para principiantes)
    for (let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i]; // sumamos cada valor
    }

    // Sacamos el promedio dividiendo la suma entre la cantidad
    return suma / numeros.length;
  }

  // ==============================
  // Lo que se mostrará en pantalla
  // ==============================
  return (
    <div>
      {/* Mostramos la pregunta */}
      <h2>Pregunta 5: Spread y Rest operator</h2>
      <p>
        • Usa <strong>spread</strong> para clonar y extender un objeto de configuración. <br />
        • Usa <strong>rest</strong> para crear una función que reciba números infinitos y
        devuelva su promedio.
      </p>

      <hr />

      {/* Mostramos la parte de Spread */}
      <h3>Ejemplo con Spread (clonar y extender)</h3>
      <p>Tema: {nuevaConfig.tema}</p>
      <p>Idioma: {nuevaConfig.idioma}</p>
      <p>Versión: {nuevaConfig.version}</p>

      {/* Mostramos la parte de Rest */}
      <h3>Ejemplo con Rest (promedio de números infinitos)</h3>
      <p>Promedio de (10, 20, 30): {promedio(10, 20, 30)}</p>
      <p>Promedio de (5, 15, 25, 35): {promedio(5, 15, 25, 35)}</p>
      <p>Promedio de (2, 4, 6, 8, 10): {promedio(2, 4, 6, 8, 10)}</p>
    </div>
  );
}
