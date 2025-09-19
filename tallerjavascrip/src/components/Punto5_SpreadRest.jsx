/*


5. Spread y Rest operator
Usa spread para clonar y extender un objeto de configuración.
Usa rest para crear una función que reciba números infinitos y devuelva su promedio.


*/
export function Punto5_SpreadRest() {
  // ==== SPREAD ====
  // Objeto original
  const config = {
    tema: "oscuro",
    idioma: "es"
  };

  // Usamos spread (...) para clonar y agregar una nueva propiedad
  const nuevaConfig = {
    ...config,
    version: "1.0"
  };

  // ==== REST ====
  // Función que recibe muchos números y calcula el promedio
  function promedio(...numeros) {
    let suma = 0;

    // Recorremos cada número con un for normal
    for (let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }

    // dividimos la suma entre la cantidad de números
    return suma / numeros.length;
  }

  // ==== RETORNO EN PANTALLA ====
  return (
    <div>
      <h1>Operadores Spread y Rest</h1>

      <h2>Spread</h2>
      <p>Tema: {nuevaConfig.tema}</p>
      <p>Idioma: {nuevaConfig.idioma}</p>
      <p>Versión: {nuevaConfig.version}</p>

      <h2>Rest</h2>
      <p>Promedio de (10, 20, 30): {promedio(10, 20, 30)}</p>
      <p>Promedio de (5, 15, 25, 35): {promedio(5, 15, 25, 35)}</p>
    </div>
  );
}
