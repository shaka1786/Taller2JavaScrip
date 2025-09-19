// 📌 Archivo: App.jsx
// Importamos las funciones desde math.js


import {sumar, restar} from "./math.js"


export function Punto14_ModulosJS() {
  // 📌 Probamos las funciones importadas
  const resultadoSuma = sumar(5, 3);   // 8
  const resultadoResta = restar(5, 3); // 2

  return (
    <div>
      <h2>Módulos de JS</h2>
      <p>5 + 3 = {resultadoSuma}</p>
      <p>5 - 3 = {resultadoResta}</p>
    </div>
  );
}
