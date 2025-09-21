// 📌 Archivo: Punto10_Promesas.jsx
// Recuerda que este archivo se importa en App.jsx para verlo en Vite

import { useState, useEffect } from "react";

export function Punto10_Promesas() {
  /*
   ==========================================================
   10. Promesas
   Pregunta:
   Crea una función getProducto(id) que devuelva una promesa:
   • Resuelta si el producto existe en un arreglo.
   • Rechazada con un error si no existe.
   ==========================================================
  */

  // 👉 1. Creamos un arreglo de productos (como si fuera una base de datos)
  const productos = [
    { id: 1, nombre: "Mouse" },
    { id: 2, nombre: "Teclado" },
    { id: 3, nombre: "Monitor" }
  ];

  /*
   👉 2. Creamos una función que devuelve una promesa
   - La promesa puede terminar en:
     ✔ resolve() → cuando todo va bien (producto encontrado).
     ❌ reject() → cuando algo falla (producto no existe).
  */
  function getProducto(id) {
    return new Promise((resolve, reject) => {
      // Buscamos el producto en el arreglo
      const producto = productos.find((p) => p.id === id);

      // Si lo encuentra → resuelve la promesa
      if (producto) {
        resolve(producto);
      } else {
        // Si no lo encuentra → rechaza la promesa
        reject("❌ Producto no encontrado");
      }
    });
  }

  // 👉 3. useState para guardar el mensaje que mostraremos en pantalla
  const [mensaje, setMensaje] = useState("Buscando producto...");

  /*
   👉 4. useEffect para ejecutar la promesa al cargar el componente
   - Aquí llamamos a getProducto(2)
   - Si existe → mostramos el nombre
   - Si no existe → mostramos el error
  */
  useEffect(() => {
    getProducto(2) // probamos con id = 2
      .then((prod) => {
        setMensaje("✅ Producto encontrado: " + prod.nombre);
      })
      .catch((error) => {
        setMensaje(error);
      });
  }, []); // [] significa que solo se ejecuta una vez al cargar el componente

  // 👉 5. Mostramos todo en pantalla
  return (
    <div>
      {/* Pregunta */}
      <h2>10. Promesas</h2>
      <p>
        Crea una función <strong>getProducto(id)</strong> que devuelva una
        promesa: Resuelta si el producto existe, y Rechazada si no existe.
      </p>

      {/* Resultado dinámico */}
      <h3>Resultado:</h3>
      <p>{mensaje}</p>
    </div>
  );
}

/*
 📌 NOTAS IMPORTANTES PARA PRINCIPIANTES
 - Una promesa es como un "compromiso".
   "Prometo traerte un producto".
   → Si lo encuentro: cumplo mi promesa (resolve).
   → Si no lo encuentro: rompo la promesa (reject).

 - En React/Vite usamos "useState" para guardar el resultado 
   y "useEffect" para ejecutar la promesa al inicio.

 - .then() se ejecuta si la promesa fue RESUELTA (éxito).
 - .catch() se ejecuta si la promesa fue RECHAZADA (error).
*/
