// 📌 Archivo: Punto3_Operador.jsx
// En este ejemplo usamos el "operador ternario".
// Es como un "if rápido" que se escribe en una sola línea.
// Forma básica:
// condición ? valorSiVerdadero : valorSiFalso;

import { useState } from "react"; // Hook de React para manejar estados

export function Punto3_Operador() {
  // ==============================
  // 🔹 useState nos permite crear variables que cambian y React se actualiza
  // numero → guarda el valor que escribe el usuario
  // setNumero → función que cambia ese valor
  // "" → valor inicial vacío
  // ==============================
  const [numero, setNumero] = useState("");

  // resultado → guarda el texto "Negativo", "Cero" o "Positivo"
  const [resultado, setResultado] = useState("");

  // ==============================
  // 🔹 Función que evalúa el número
  // ==============================
  function evaluar() {
    // Convertimos lo que escribió el usuario (string) a número
    const n = Number(numero);

    // Operador ternario anidado:
    // 1. ¿n < 0? → Sí = "Negativo"
    // 2. Si no, ¿n === 0? → Sí = "Cero"
    // 3. Si no, entonces "Positivo"
    const res = n < 0 ? "Negativo" : n === 0 ? "Cero" : "Positivo";

    // Guardamos el resultado en el estado para mostrarlo en pantalla
    setResultado(res);
  }

  // ==============================
  // Lo que se mostrará en pantalla
  // ==============================
  return (
    <div>
      <h2>3. Operador ternario anidado</h2>
      <p>Crea una función que reciba un número y devuelva:</p>
      <p>• "Negativo" si es menor que 0.</p>
      <p>• "Cero" si es igual a 0.</p>
      <p>• "Positivo" si es mayor que 0.</p>

      


      <h2>Ejemplo: Operador ternario anidado</h2>

      {/* Caja de texto para que el usuario escriba un número */}
      <input
        type="number" // hace que solo permita números
        value={numero} // conecta con la variable numero
        onChange={(e) => setNumero(e.target.value)} // cambia el valor cuando escribimos
        placeholder="Escribe un número"
      />

      {/* Botón que ejecuta la función evaluar */}
      <button onClick={evaluar}>Evaluar</button>

      {/* Aquí se mostrará el resultado */}
      <p>Resultado: {resultado}</p>
    </div>
  );
}
