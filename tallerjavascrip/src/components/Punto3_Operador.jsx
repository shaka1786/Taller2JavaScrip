/*
3. Operador ternario anidado
Crea una función que reciba un número y devuelva:
"Negativo" si es menor que 0.
"Cero" si es igual a 0.
"Positivo" si es mayor que 0.
*/


import { useState } from "react";

export  function Punto3_Operador() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  function evaluar() {
    const n = Number(numero);
    const res = n < 0 ? "Negativo" : n === 0 ? "Cero" : "Positivo";
    setResultado(res);
  }

  return (
    <div>
      <h2>Ejemplo: Operador ternario</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Escribe un número"
      />

      <button onClick={evaluar}>Evaluar</button>

      <p>{resultado}</p>
    </div>
  );
}
